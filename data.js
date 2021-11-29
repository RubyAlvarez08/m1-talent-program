

const myInfo = "<p> My name is {{name}} and I live at {{street}} in {{city}}, {{state}}</p>";

const template = Handlebars.compile(myInfo);

const data = template({
                        name: "Miguel Rivera",
                        street: "2",
                        city: "Santa Cecilia",
                        state: "Mexico"
                    });
document.getElementById("myData").innerHTML += data;