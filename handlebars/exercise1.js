

const myInfo = "<b> My name is {{name}} and I live at {{street}} in {{city}}, {{state}}</b>";

const template = Handlebars.compile(myInfo);

const data = template({
                        name: "Miguel Rivera",
                        street: "2",
                        city: "Santa Cecilia",
                        state: "Mexico"
                    });
                    console.log(data);
document.getElementById("myData").innerHTML += data;