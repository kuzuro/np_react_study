import { useTranslation } from "react-i18next";

function Main() {

    const { t, i18n} = useTranslation();

    const chageLng_ko = () => i18n.changeLanguage("ko");   
    
    const chageLng_en = () => i18n.changeLanguage("en"); 

    return (
        <div>
            <h2>lang : {i18n.language}</h2>
            <p>{t("welcome")}</p>
            <p>{t("hello world")}</p>
            <button onClick={chageLng_ko}>한국어</button>
            <button onClick={chageLng_en}>영어</button>
        </div>
    );

}

export default Main;