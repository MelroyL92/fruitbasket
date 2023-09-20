import {useForm, useController} from "react-hook-form";
import React, {useState} from "react";
import Select from "react-select";


const deliveryOptions = [
    {value: 'weekly', label: 'Weekly'},
    {value: "biweekly", label: 'Biweekly'},
    {value: 'monthly', label: 'Monthly'},
];


const UserForm = ({onSave, formData = {}}) => {
    const {register, control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: formData,
    })

    const handleSave = (formValues) => {
        onSave(formValues);
    }

    const changeHandler = (deliveryOptions) => {
        field.onChange(deliveryOptions.value)
    }


    const {field} = useController({name: 'deliveryFrequency', control})

    return (

        <form onSubmit={handleSubmit(handleSave)} className="parentClassForm">
            <div className="child-form">

                <label htmlFor="FirstName">
                    First Name
                    <input type="text" id="FirstName" {...register("firstname",{
                        required :{
                            value: true,
                            message: "Voornaam is verplicht"
                        },
                    })}
                    />
                    {errors.firstname && <p>{errors.firstname.message}</p>}
                </label>
                <label htmlFor="LastName">Last Name
                    <input type="text" id="LastName" {...register("lastname", {
                        required : {
                            value: true,
                            message: "Achternaam is verplicht"
                        },
                    })}/>
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                </label>
                <label htmlFor="Age">Age
                    <input type="number" id="Age" {...register("age", {
                        required: {
                            value: true,
                            message: "dit veld is verplicht"},
                    })}/>
                    {errors.age && <p>{errors.age.message}</p>}
                </label>
                <label htmlFor="Zipcode">Zippcode
                    <input type="text" id="Zipcode" {...register("zipcode", {
                        required: true,
                        maxLength: {
                            value: 6,
                            message: "maximum length of this field is 6 characters",},
                        minLength: {
                            value :6,
                            message: "minimum length of this field is 6 characters"
                        },
                    })}/>
                    {errors.zipcode && <p>{errors.zipcode.message}</p>}
                </label>
                <label htmlFor="deliveryFrequency">Delivery Frequency
                    <Select id="deliveryFrequency"
                            value={deliveryOptions.find(({value}) => value === field.value)}
                            onChange={changeHandler}
                            options={deliveryOptions}
                            required={true}
                    />
                </label>
                <label htmlFor="deliveryPeriod">Delivery time
                    <input type="radio" id="deliveryPeriod" value="overdag" {...register("deliveryPeriod")}
                    /> Overdag
                    <input type="radio" id="deliveryPeriod" value="avond" {...register("deliveryPeriod")}
                    /> 's Avonds
                </label>
                <label htmlFor="Comments">Comments
                    <textarea {...register("comments")} id="comments" cols="30" rows="4"/>
                </label>
                <label htmlFor="terms"> I agree with the terms and conditions</label>
                <input type="checkbox" id="terms" {...register("terms")} required={true}/>
                <button type="submit">Verzenden</button>
            </div>
        </form>

    )

}
export default UserForm;
