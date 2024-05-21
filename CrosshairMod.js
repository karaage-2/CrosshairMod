let color = "";
let shape = "";
(function () {
    "use strict";
    window.mod = {
        loadGui: () => {},
        modMenu: {
            crosshairSettings: {
                /* Change the type here to have the type be always set as a default */
                shape: localStorage.getItem('shape')

, // None, Cross, Circle, Square, Long Width
                color:  localStorage.getItem('color'),
                container: {
                    label: {},
                },
            },
        },
    };

    window._utils = {};
    window._utils.requirelib = async function (url, global) {
        return new Promise(async function (resolve) {
            async function getCode() {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false);
                xmlHttp.send(null);
                return xmlHttp.responseText;
            }
            let code = await getCode();

            if (global) {
                code += 'window["' + global + '"] = ' + global + ";";
            }
            let evaluateCode = new Function(code);
            evaluateCode();
            resolve("done");
        });
    };

    window._utils
        .requirelib("https://unpkg.com/guify@0.12.0/lib/guify.min.js")
        .then(() => {
        window.mod.loadGui();
            updateCrosshair(window.mod.modMenu.crosshairSettings.shape);
            updateCrosshair(window.mod.modMenu.crosshairSettings.color);
    });

    const y = document.createElement("div");
    y.id = "crossY";
    const z = document.createElement("div");
    z.id = "crossZ";
    const w = document.createElement("div");
    w.id = "crossW";
    const x = document.createElement("div");
    x.id = "crossX";

    document.body.appendChild(y);
    document.body.appendChild(z);
    document.body.appendChild(w);
    document.body.appendChild(x);
    //Deletes original crosshair for bloxd.io
    if(document.location.href == "https://bloxd.io/"){
        setInterval(function() {
            const crosshair = document.querySelector(".CrossHair");
            if (crosshair) {
                crosshair.textContent = "";
            }
        }, 1000);
    }
    function updateCrosshair(data) {
        let y = document.getElementById("crossY");
        let z = document.getElementById("crossZ");
        let w = document.getElementById("crossW");
        let x = document.getElementById("crossX");
        if(isColor(data) == true){
            color = data;
            localStorage.setItem('color', data);
        }else{
            shape = data;
            localStorage.setItem('shape', data);
        }
        let subColor = blackOrWhite(color);
        if (shape == "None") {
            y.style.cssText = `width:0.0000000001px;height:1px;background-color:${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            z.style.cssText = `width:0.0000000001px;height:1px;background-color:${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            w.style.cssText = `width:0.0000000001px;height:1px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            x.style.cssText = `width:0.0000000001px;height:1px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
        }

        if (shape == "Cross") {
            y.style.cssText = `width:5px;height:17px;background-color:${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            z.style.cssText = `width:17px;height:5px;background-color:${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            w.style.cssText = `width:4px;height:16px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            x.style.cssText = `width:16px;height:4px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
        }

        if (shape == "Circle") {
            y.style.cssText = `width:9px;height:9px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
            z.style.cssText = `width:8px;height:8px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:100px`;
            w.style.cssText = `width:0.0000000001px;height:1px;background-color:${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            x.style.cssText = `width:0.0000000001px;height:1px;background-color${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
        }


        if (shape == "Square") {
            y.style.cssText = `width:9px;height:9px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            z.style.cssText = `width:8px;height:8px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            w.style.cssText = `width:0.0000000001px;height:1px;background-color:${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            x.style.cssText = `width:0.0000000001px;height:1px;background-color:${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
        }


        if (shape == "Long Width") {
            y.style.cssText = `width:17px;height:5px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            z.style.cssText = `width:16px;height:4px;background-color:${color};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            w.style.cssText = `width:0.0000000001px;height:1px;background-color:${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
            x.style.cssText = `width:0.0000000001px;height:1px;background-color:${subColor};position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:0px`;
        }
    }


    window.mod.loadGui = function () {
        const crosshairGui = new window.guify({
            title: "Crosshair Mod",
            theme: "dark",
            align: "left",
            width: 300,
            barMode: "none",
            opacity: 0.95,
            root: document.body,
            open: false
        });



        crosshairGui.Register({
            type: "folder",
            label: "Settings",
            open: false
        });

        crosshairGui.Register({
            type: "select",
            label: "Types",
            object: window.mod.modMenu.crosshairSettings,
            property: "shape",
            folder: "Settings",
            options: [
                "None",
                "Cross",
                "Circle",
                "Square",
                "Long Width",

            ],
            onChange: updateCrosshair,
            open: false
        });
        crosshairGui.Register({
            type: 'color',
            label: 'HEX Color',
            format: 'hex',
            folder: "Settings",
            object: window.mod.modMenu.crosshairSettings,
            property: 'color',
            onChange: updateCrosshair,
            open: false
        })
    };
    function isColor(color) {
        var testElement = document.createElement("span");
        testElement.style.backgroundColor = color;
        return testElement.style.backgroundColor !== "";
    }
    function blackOrWhite ( hexcolor ) {
        var r = parseInt( hexcolor.substr( 1, 2 ), 16 ) ;
        var g = parseInt( hexcolor.substr( 3, 2 ), 16 ) ;
        var b = parseInt( hexcolor.substr( 5, 2 ), 16 ) ;

        return ( ( ( (r * 299) + (g * 587) + (b * 114) ) / 1000 ) < 128 ) ? "white" : "black" ;
    }
})();
