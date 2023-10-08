import Chart from 'chart.js/auto';

export const changeArraysToDictionaryData = (labels,answers) => {
    let data = []
    for(let i = 0; i < labels.length; i++){
        data.push({
            elementName: labels[i],
            value: 0
        })
    }

    for(let i = 0; i < answers.length; i++) {
        for(let j = 0; j < data.length; j++) {
            if(data[j].elementName == answers[i]) {
                data[j].value += 1;
                break;
            }
        }

    }

    return data;
}

export const drawChart = (canvasID,chartType,labels,label,answers,colors = ['darkred','red','blue','green','darkgreen']) => {

    let data = changeArraysToDictionaryData(labels,answers);


    new Chart(
        document.getElementById(canvasID),
        {
            type: chartType,
            options:{
                maintainAspectRatio: false,
            },
            data:{
                labels: data.map(row => row.elementName),
                datasets:[
                    {
                        label: label,
                        data: data.map(row => row.value),
                        backgroundColor: colors
                    }
                ]
            }
        }
    )
};

export const getAverageAnswers = (labels,answers) => {
    let data = changeArraysToDictionaryData(labels,answers);
    let result = 0;


    for(let i = 0; i < data.length; i++) {
        result += parseFloat(data[i].elementName) * data[i].value;
    }


    return result / data.length;
} 

export const writeAverageAnswers = (containerId,labels,answers) => {
    let container = document.getElementById(containerId);
    container.textContent = getAverageAnswers(labels,answers);
} 
