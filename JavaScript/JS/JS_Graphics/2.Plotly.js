const Show = () => {
    const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yArray = [55, 49, 44, 24, 15];

    const data = [{
        x: xArray,
        y: yArray,
        type: "bar",
        orientation: "v",
        marker: { color: "rgba(0,0,255,0.6)" }
    }];

    const layout = { title: "World Wide Wine Production" };

    Plotly.newPlot("myPlot", data, layout);
}

const HorBarChart = () => {
    const xArray = [55, 49, 44, 24, 15];
    const yArray = ["Italy", "France", "Spain", "USA", "Argentina"];
    const data = [{
        x: xArray,
        y: yArray,
        type: 'bar',
        orientation: 'h',
        marker: { color: 'rgba(255,0,0,0.6)' }
    }];

    const layout = { title: 'World Wide Wine Production' };
    Plotly.newPlot('myPlothor', data, layout);
}

const showPie = () => {
    const xArray = ['Italy', 'France', 'Spain', 'USA', 'Argentina'];
    const yArray = [55, 49, 44, 24, 15];
    const layout = { title: 'World Wide Wine Production Rank' };
    const data = [{
        label: xArray,
        values: yArray,
        type: 'pie'
    }];
    Plotly.newPlot('PieChart', data, layout);
}

const showDonut = () => {
    const yPopulation = [1407563900, 1425893500, 273753180, 231402110, 336997630];
    const xCountry = ['India', 'Chine', 'Indonesia', 'Pakistan', 'United States'];

    const layout = { title: "Word Population Growth" };
    
    const data = [{
        labels: yPopulation,
        values: xCountry,
        hole: .4,
        type: "pie"
    }];
    Plotly.newPlot('DountChart', data, layout);
}

const Plotting=()=>{
    let exp = "Math.sin(x)";

    // Generate values
    const xValues = [];
    const yValues = [];
    for (let x = 0; x <= 10; x += 0.1) {
      xValues.push(x);
      yValues.push(eval(exp));
    }
    
    // Display using Plotly
    const data = [{x:xValues, y:yValues, mode:"lines"}];
    const layout = {title: "y = " + exp};
    Plotly.newPlot("Plotting", data, layout);
}

const lineGraph=()=>{
    const xArr = [1996,1998,1999,2002,2005,2007,2008,2011,2015,2019,2022];
    const yArr = [20000000,50000000,80000000,90000000,120000000,150000000,160000000,180000000,500000000,1000000000];

    const data=[
        {
            x:xArr,
            y:yArr,
            mode:'lines',
            type:"scatter"
        }
    ];
    const layout={
        xaxis:{ range:[1995,2023],title:"Years"},
        yaxis:{ range:[20000000,2000000000],title:'Population in Billion'},
        title:'World Population Growth'
    }

    Plotly.newPlot('lineGraph',data,layout);
}