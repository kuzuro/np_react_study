import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./en.json";
import ko from "./ko.json";

const resources = { 
    en : {
        /* translation : {
            welcome : "welcome",
            "hello world" : "hello world"
        } */
        enJson
    },
    ko/*  : {
        translation : { 
            welcome : "환영합니다",
            "hello world" : "안녕 세계"
        } 
    } */
}

i18next.use(initReactI18next).init({ 
    resources : resources,
    lng : "en"
});
