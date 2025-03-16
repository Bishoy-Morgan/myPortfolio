import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
    addForm,
    getVisitorAPIInfo,
    getCountryCode,
} from '../utils/utils';
import PhoneInput from "react-phone-input-2";
import "../phone.css";
import Link from "next/link";

function FormComp({ formName, setLoad }) {

    const initState = {
        name: "",
        email: "",
        phone: "",
        message: "",
        note: "",
        formName,
    };

    const [formData, setFormData] = useState(initState);
    const [countryCodeISO, setCountryCodeISO] = useState("");
    const [inputCountry, setInputCountry] = useState("");
    const [phoneData, setPhoneData] = useState();
    const [visitorInfo, setVisitorInfo] = useState("");
    const [successMsg, setSuccessMsg] = useState(false);

    useEffect(() => {
        getVisitorAPIInfo().then((data) => {
            setInputCountry(data?.countryCode);
            setCountryCodeISO(data?.countryCode);
            setVisitorInfo(data?.notes);
        });
    }, []);
    

    useEffect(() => {
        let x = getCountryCode(countryCodeISO);
        if (x && x.code) {
            setTimeout(() => {
            setPhoneData({
                dailCode: x?.dial_code.replace("+", ""),
            });
            setInputCountry(x.code.toLowerCase());
        }, 20);
        }
    }, [countryCodeISO]);

    const handleChange = (e) => {
        setFormData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const phone = formData.phone || "";
        const dialCode = phoneData?.dialCode ? `+${phoneData.dialCode}` : "";
    
        const note = (formData.note || "").trim() + " " + (visitorInfo || "").trim();
    
        const obj = {
            note, 
            name: formData.name,
            email: formData.email,
            mobile: `${dialCode}${phone}`,
            phoneData,
            message: formData.message,
            countryCodeISO,
        };
    
        setLoad(true);
        console.log(obj);
        
        try {
            let doc = await addForm(obj);
            if (doc.ok) {
                setFormData({ ...initState});
                setSuccessMsg(true);
                setTimeout(() => {
                    setSuccessMsg(false);
                }, 7000);
            }
        } catch (error) {
            console.error("Error while submitting form", error);
        }
        setLoad(false);
    };
    
    
    return (
        <div className="w-full flex flex-col ">
            <div className={`${successMsg && 'opacity-100'} w-full my-[4%] lg:my-0 opacity-0 lg:w-[28.3vw] text-[#fafafa] p3 bg-green-500/70 px-[2%] py-[2%] rounded-lg lg:mb-[2%]`}>
                Form submitted successfully. I will get back to you soon.  
            </div>
            <form name={formName} className="flex flex-col items-start" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full lg:w-4/5">
                    <input
                        className="inputStyle"
                        placeholder="Name"
                        name="name"
                        autoComplete="given-name"
                        onChange={handleChange}
                        required
                        value={formData.name}
                    />
                    <input
                        className="inputStyle"
                        type="email"
                        placeholder="Email"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        required
                        value={formData.email}
                    />
                    {/* Desktop PhoneInput  */}
                    <div className="mb-[2%] hidden lg:block ">
                        <PhoneInput
                            countryCodeEditable={true}
                            autoFormat={false}
                            containerClass="rti"
                            inputStyle={{
                                backgroundColor: "rgba(29, 29, 29, 0.6)", 
                                width: "28.36vw", 
                                height: "8vh", 
                                paddingLeft: "11%", 
                                borderTopLeftRadius: "0.5rem", 
                                borderBottomRightRadius: "0.5rem",
                                borderTopRightRadius: "0.15rem", 
                                borderBottomLeftRadius: "0.15rem", 
                                fontSize: "0.808vw",  
                                color: "#fafafab3", 
                                outline: "none",
                            }}
                            buttonStyle={{
                                backgroundColor: "rgba(29, 29, 29, 0.8)",
                                width: "2vw",
                                height: "8vh",
                                paddingRight: "11%",
                                borderTopLeftRadius: "0.5rem",
                                borderBottomLeftRadius: "0.15rem",
                            }}
                            placeholder="PHONE NUMBER"
                            inputProps={{
                                name: "phone",
                                maxLength: 15,
                            }}
                            preferredCountries={["ae", "in", "uk", "de", "ru", "sg", "us"]}
                            country={inputCountry}
                            countryCodeISO={countryCodeISO}
                            name="phone"
                            value={formData.phone}
                            onChange={(value, data) => {
                                setFormData((prev) => ({
                                    ...prev,
                                    phone: value,
                                }));
                                setPhoneData(data);
                                setCountryCodeISO(data?.countryCode || "");
                            }}
                        />
                    </div>
                    {/* Mobile PhoneInput  */}
                    <div className="mb-[2%] lg:hidden ">
                        <PhoneInput
                            countryCodeEditable={true}
                            autoFormat={false}
                            containerClass="rti"
                            inputStyle={{
                                backgroundColor: "rgba(29, 29, 29, 0.6)", 
                                width: "100%", 
                                height: "5.5vh", 
                                paddingLeft: "12%", 
                                borderTopLeftRadius: "0.5rem", 
                                borderBottomRightRadius: "0.5rem",
                                borderTopRightRadius: "0.15rem", 
                                borderBottomLeftRadius: "0.15rem", 
                                fontSize: "3.721vw",  
                                color: "#fafafab3", 
                                outline: "none",
                            }}
                            buttonStyle={{
                                backgroundColor: "rgba(29, 29, 29, 0.8)",
                                width: "2vw",
                                height: "5.5vh",
                                paddingRight: "11%",
                                borderTopLeftRadius: "0.5rem",
                                borderBottomLeftRadius: "0.15rem",
                            }}
                            placeholder="PHONE NUMBER"
                            inputProps={{
                                name: "phone",
                                maxLength: 15,
                            }}
                            preferredCountries={["ae", "in", "uk", "de", "ru", "sg", "us"]}
                            country={inputCountry}
                            countryCodeISO={countryCodeISO}
                            name="phone"
                            value={formData.phone}
                            onChange={(value, data) => {
                                setFormData((prev) => ({
                                    ...prev,
                                    phone: value,
                                }));
                                setPhoneData(data);
                                setCountryCodeISO(data?.countryCode || "");
                            }}
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="inputStyle pt-[2%] min-h-[17vh] !rounded-br-lg !border-none !outline-none resize-none"
                    />
                </div>
                <input type="submit" id={`${formName}-submit`} className="hidden" />
            </form>
        </div>
    );
}

export function LinkButtonComp(props) {
    let x = props.href?.replace("/?", "") || "";
    const params1 = new URLSearchParams(x);
    const params2 = useSearchParams();

    for (let [key, value] of params2) {
        params1.append(key, value);
    }

    let furl = `?${params1.toString()}`;

    return (
        <Link scroll={false} href={furl} className={props.className} style={{ textDecoration: "none" }}>
            {props.children}
        </Link>
    );
}

export default FormComp;
