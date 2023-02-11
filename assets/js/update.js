let runScripts = () => {
    let chart_bars = document.getElementById("chart-bars");
    //Esto no se debe hacer, solo para seguimiento
    //console.log(chart_bars);
    let icons = document.getElementsByTagName("i");
    //console.log(icons);
    let cards = document.getElementsByClassName("card");
    //console.log(cards);
};

let modifyText = () => {
    let listOfP = document.getElementsByTagName("p");
    let elementP = listOfP[3];
    elementP.innerHTML = "Dinero actual";
    let listOfH4 = document.getElementsByTagName("h4");
    let elementH4 = listOfH4[0];
    elementH4.innerHTML = "$301k";
};

let updateData = () => {
    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }];
    
    let [ users, clients, sales ] = data;
    
    let { title: title_users , value: value_users } = users;
    let { title: title_clients , value: value_clients } = clients;
    let { title: title_sales , value: value_sales } = sales;

    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

    let listOfElements = document.getElementsByClassName('text-end pt-1') 
    let [ , second, third, fourth ] = listOfElements;

    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;

    let cambios = [
        {
            valor_previo: 250,
            valor_actual: 301,
            mensaje_tiempo: 'que la semana anterior'
        },
        {
            valor_previo: 3510,
            valor_actual: 3200,
            mensaje_tiempo: 'que la semana anterior'
        },
        {
            valor_previo: 3920,
            valor_actual: 4215,
            mensaje_tiempo: 'que ayer'
        },
        {
            valor_previo: 110200,
            valor_actual: 121520,
            mensaje_tiempo: 'que ayer'
        }
    ];

    let i = 0;
    let {valor_previo, valor_actual, mensaje_tiempo} = cambios[i];
    
    let clase_cambio = (porcentaje) => {
        let clase = porcentaje > 0 ? 'text-success' : 'text-daner';
        return clase;
    }

    let porcentaje_de_cambio = (valor_previo, valor_actual) => (valor_actual - valor_previo) * 100 / valor_previo;

    let mensaje_texto = '<p class="mb-0"><span class="text-sm ${clase_cambio} font-weight-bolder"> ${porcentaje_de_cambio} </span> ${mensaje_tiempo} </p>'

    let listaDeFooters = getElementsByClassName("card-footer p-3");

    listaDeFooters[0].innerHTML = mensaje_texto;
    
    for (let i=1; i < cambios.length - 1; ) {
        {valor_previo, valor_actual, mensaje_tiempo} = cambios[i];
        clase_cambio(porcentaje_de_cambio)

}
    
        
    
    }
};

runScripts();
modifyText();
updateData();