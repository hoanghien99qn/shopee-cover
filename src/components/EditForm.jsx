import '../assets/css/AddForm.css'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useEditProductMutation } from '../features/api/apiSlice'
import Loading from './Loading';

function AddForm(props) {

    const { item, onCloseModal } = props
    const [isLoadingComponent, setIsLoadingComponent] = useState(false)

    const [editProduct, { isLoading }] = useEditProductMutation()

    const validationSchema = Yup.object().shape({
        nameProduct: Yup.string()
            .required('Name is required'),
        price: Yup.number()
            .min(1000, 'Price is in the range 1,000vnd - 1,000,000,000vnd')
            .max(1000000000, 'Price is in the range 1,000vnd - 1,000,000,000vnd')
            .required('Price is required'),
        saleOff: Yup.number()
            .min(0, 'Sale is in the range 0% - 99%')
            .max(99, 'Sale is in the range 0% - 99%')
            .required('Sale off is required'),
        address: Yup.string()
            .required('Address is required'),
        image: Yup.string()
            .required('Image is required'),
        vote: Yup.number()
            .min(1, 'Vote is in the range 1star - 5star')
            .max(5, 'Vote is in the range 1star - 5star')
            .required('Vote is required'),
    })

    // const formOptions = { resolver: yupResolver(validationSchema), defaultValues: initValue }

    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(validationSchema), defaultValues: item })
    const { errors } = formState

    const onSubmit = async (data) => {
        if (!isLoading) {
            try {
                setIsLoadingComponent(true)
                await editProduct(data)
                setIsLoadingComponent(false)
                onCloseModal()
            } catch (err) {
                console.error('Failed to Edit the product: ', err)
            }
        }
    }

    return (
        <div className="add-form">
            <h2 className="add-title">Edit product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="form-group-field">
                        <label htmlFor="name">Name</label>
                        <input name="nameProduct" {...register('nameProduct')} type="text" id="name" placeholder="Name of product" />
                    </div>
                    <p className="error-valid">{errors.nameProduct?.message}</p>
                </div>
                <div className="form-group">
                    <div className="form-group-field">
                        <label htmlFor="price">Price</label>
                        <input name="price" {...register('price')} type="number" id="price" placeholder="VD: 250000" />
                    </div>
                    <p className="error-valid">
                        {errors.price?.type === "min" || errors.price?.type === "max" ? errors.price?.message : errors.price?.message ? "Price is required" : ""}
                    </p>
                </div>
                <div className="form-group">
                    <div className="form-group-field">
                        <label htmlFor="sale_off">Sale Off</label>
                        <input name="saleOff" {...register('saleOff')} type="number" id="sale_off" placeholder="VD: 15" />
                    </div>
                    <p className="error-valid">
                        {errors.saleOff?.type === "min" || errors.saleOff?.type === "max" ? errors.saleOff?.message : errors.saleOff?.message ? "Sale off is required" : ""}
                    </p>
                </div>
                <div className="form-group">
                    <div className="form-group-field">
                        <label htmlFor="address">Address</label>
                        <input name="address" {...register('address')} type="text" id="address" placeholder="TP Ho Chi Minh" />
                    </div>
                    <p className="error-valid">{errors.address?.message}</p>
                </div>
                <div className="form-group">
                    <div className="form-group-field">
                        <label htmlFor="image">Image</label>
                        <input name="image" {...register('image')} type="text" id="image" placeholder="Link of image" />
                    </div>
                    <p className="error-valid">{errors.image?.message}</p>
                </div>
                <div className="form-group">
                    <div className="form-group-field">
                        <label htmlFor="vote">Vote</label>
                        <input name="vote" {...register('vote')} type="number" id="vote" placeholder="VD: 5 ( only integer number )" />
                    </div>
                    <p className="error-valid">
                        {errors.vote?.type === "min" || errors.vote?.type === "max" ? errors.vote?.message : errors.vote?.message ? "Vote is required" : ""}
                    </p>
                </div>
                {isLoadingComponent ? <Loading /> : ""}
                <button className="add-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddForm;