import answers from './csvjson.json';
import './style.css';

const { drawChart,writeAverageAnswers } = require("./DrawChart.js");

(async function() {
    drawChart(
        "genders",
        "pie",
        ["Mężczyzna","Kobieta","Nie binarna","Inna"],
        "Płeć",
        answers["Jaką masz płeć?"],
        ["blue","red","yellow","green"],
    );



    drawChart(
        "ages",
        "pie",
        ["0 - 10","11 - 17","18 - 20","21 - 25","26 - 30","31 - 35","36 - 40","41 - 45","46 - 50","51 - 55","56 - 60","60+"],
        "Wiek",
        answers["Ile masz lat?"],
        ["pink","blue","red","gray","yellow","orange","green","black","cyan","purple"],
    );
    


    drawChart(
        "occupations",
        "bar",
        ["Uczeń","Bezrobotny","Student","Bezrobotny, ciężko pracujący"],
        "Zawód",
        answers["W jakim zawodzie pracujesz?"],
        ["green","blue","red","gray"],
    );




    drawChart(
        "family",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie relacja z rodzinną?",
        answers["Jak ważna jest dla ciebie relacja z rodzinną?"]
    );
    writeAverageAnswers("family-average",[1,2,3,4,5],answers["Jak ważna jest dla ciebie relacja z rodzinną?"]);




    drawChart(
        "friends",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważne są dla ciebie relacje z przyjaciółmi?",
        answers["Jak ważne są dla ciebie relacje z przyjaciółmi?"]
    );
    writeAverageAnswers("friends-average",[1,2,3,4,5],answers["Jak ważne są dla ciebie relacje z przyjaciółmi?"]);
    



    drawChart(
        "health",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważne jest dla ciebie twoje zdrowie?",
        answers["Jak ważne jest dla ciebie twoje zdrowie?"]
    );
    writeAverageAnswers("health-average",[1,2,3,4,5],answers["Jak ważne jest dla ciebie twoje zdrowie?"]);
    


    drawChart(
        "well-being",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie twoje samopoczucie?",
        answers["Jak ważna jest dla ciebie twoje samopoczucie?"]
    );
    writeAverageAnswers("well-being-average",[1,2,3,4,5],answers["Jak ważna jest dla ciebie twoje samopoczucie?"]);



    drawChart(
        "career",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie twoja kariera zawodowa?",
        answers["Jak ważna jest dla ciebie twoja kariera zawodowa?"]
    );
    writeAverageAnswers("career-average",[1,2,3,4,5],answers["Jak ważna jest dla ciebie twoja kariera zawodowa?"]);



    drawChart(
        "security",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie twoje bezpieczeństwo?",
        answers["Jak ważna jest dla ciebie twoje bezpieczeństwo?"]
    );
    writeAverageAnswers("security-average",[1,2,3,4,5],answers["Jak ważna jest dla ciebie twoje bezpieczeństwo?"]);



    drawChart(
        "freedom",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie wolność?",
        answers["Jak ważna jest dla ciebie wolność?"]
    );
    writeAverageAnswers("freedom-average",[1,2,3,4,5],answers["Jak ważna jest dla ciebie wolność?"]);


    drawChart(
        "views",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważne jest dla ciebie wyrażanie twoich poglądów?",
        answers["Jak ważne jest dla ciebie wyrażanie twoich poglądów?"]
    );
    writeAverageAnswers("views-average",[1,2,3,4,5],answers["Jak ważne jest dla ciebie wyrażanie twoich poglądów?"]);
    

    drawChart(
        "country",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważny jest dla ciebie twój kraj?",
        answers["Jak ważne jest dla ciebie twój kraj?"]
    );
    writeAverageAnswers("country-average",[1,2,3,4,5],answers["Jak ważne jest dla ciebie twój kraj?"]);


    drawChart(
        "money",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważne jest dla ciebie bogactwo?",
        answers["Jak ważne jest dla ciebie bogactwo?"]
    );
    writeAverageAnswers("money-average",[1,2,3,4,5],answers["Jak ważne jest dla ciebie bogactwo?"]);
    


    drawChart(
        "fame",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie sława?",
        answers["Jak ważna jest dla ciebie sława?"]
    );
    writeAverageAnswers("fame-average",[1,2,3,4,5],answers["Jak ważna jest dla ciebie sława?"]);
    

    drawChart(
        "success",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważny jest dla ciebie sukces?",
        answers["Jak ważny jest dla ciebie sukces?"]
    );
    writeAverageAnswers("success-average",[1,2,3,4,5],answers["Jak ważny jest dla ciebie sukces?"]);
    

    drawChart(
        "religion",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie religia?",
        answers["Jak ważna jest dla ciebie religia?"]
    );
    writeAverageAnswers("religion-average",[1,2,3,4,5],answers["Jak ważna jest dla ciebie religia?"]);
    

    drawChart(
        "culture",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważny jest dla ciebie kontakt z kulturą?",
        answers["Jak ważny jest dla ciebie kontakt z kulturą?"]
    );
    writeAverageAnswers("culture-average",[1,2,3,4,5],answers["Jak ważny jest dla ciebie kontakt z kulturą?"]);
    

    drawChart(
        "creative",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie kreatywność?",
        answers["Jak ważna jest dla ciebie kreatywność?"]
    );
    writeAverageAnswers("creative-average",[1,2,3,4,5],answers["Jak ważna jest dla ciebie kreatywność?"]);
    

    drawChart(
        "hobby",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważne jest dla ciebie twoje zainteresowania/hobby?",
        answers["Jak ważne jest dla ciebie twoje zainteresowania/hobby?"]
    );
    writeAverageAnswers("hobby-average",[1,2,3,4,5],answers["Jak ważne jest dla ciebie twoje zainteresowania/hobby?"]);


    drawChart(
        "personal-development",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważny jest dla ciebie twój rozwój osobisty?",
        answers["Jak ważny jest dla ciebie twój rozwój osobisty?"]
    );
    writeAverageAnswers("personal-development-average",[1,2,3,4,5],answers["Jak ważny jest dla ciebie twój rozwój osobisty?"]);
    

    drawChart(
        "honesty",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie uczciwość?",
        answers["Jak ważne jest dla ciebie uczciwość?"]
    );
    writeAverageAnswers("honesty-average",[1,2,3,4,5],answers["Jak ważne jest dla ciebie uczciwość?"]);



    drawChart(
        "things",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważne są dla ciebie rzeczy materialne?",
        answers["Jak ważne są dla ciebie rzeczy materialne?"]
    );
    writeAverageAnswers("things-average",[1,2,3,4,5],answers["Jak ważne są dla ciebie rzeczy materialne?"]);



    drawChart(
        "education",
        "bar",
        ["1","2","3","4","5"],
        "Jak ważna jest dla ciebie edukacja?",
        answers["Jak ważna jest dla ciebie edukacja?"]
    );
    writeAverageAnswers("education-average",[1,2,3,4,5],answers["Jak ważna jest dla ciebie edukacja?"]);




})();


