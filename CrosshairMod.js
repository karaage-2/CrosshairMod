// ==UserScript==
// @name         Crosshair Mod
// @version      1
// @description  Crosshhair Mod
// @author       SnowyOwl
// @icon         data:image/png;base64,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
// @match        https://bloxd.io/*
// @match        https://kirka.io/*
// @grant        none
// ==/UserScript==
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
            console.log("hi");
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
