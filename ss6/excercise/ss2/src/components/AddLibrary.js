import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as LibraryService from '../service/LibraryService';
import{Field,Formik,Form} from 'formik';

export function AddLibrary(){

    const addBook = async(values)=>{
        const result =await LibraryService.addBookToLibrary(values);
        LibraryService.getAllLibraryList();
    }
    return(
        <>
        <Formik
        initialValues={{
            title: "",
            quantity: ""
        }}
        onSubmit={async (values,{setSubmitting})=>{
            setSubmitting(false);
            await addBook(values);
        }}
        >
        <Form>
            <div>titel</div>
            <Field type="text" name="title"></Field>
            <div>quantity</div>
            <Field type="number" name="quantity"></Field>
            <button type="submit" className="btn btn-primary">submit</button>
        </Form>
        </Formik>
        </>
    );
}