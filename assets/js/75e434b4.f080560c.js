"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8229],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11810:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],s={sidebar_position:3},o="Plugins",u={unversionedId:"reference/plugins",id:"reference/plugins",title:"Plugins",description:"Plugins k\xf6nnen verwendet werden, um verschiedene Ger\xe4te und externe Datenquellen in evcc zu integrieren. Diese k\xf6nnen \xfcber den Wert custom des Parameters type in meter (Strommessger\xe4te), charger (Wallboxen) oder vehicle (Fahrzeuge) verwendet werden.",source:"@site/docs/reference/plugins.md",sourceDirName:"reference",slug:"/reference/plugins",permalink:"/docs/reference/plugins",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/plugins.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"sponsortoken",permalink:"/docs/reference/configuration/sponsortoken"},next:{title:"Modbus",permalink:"/docs/reference/modbus"}},p={},c=[{value:"Modbus (lesen/schreiben)",id:"modbus-lesenschreiben",level:2},{value:"MQTT (lesen/schreiben)",id:"mqtt-lesenschreiben",level:2},{value:"HTTP (lesen/schreiben)",id:"http-lesenschreiben",level:2},{value:"Websocket (nur lesen)",id:"websocket-nur-lesen",level:2},{value:"SMA/Speedwire (nur lesen)",id:"smaspeedwire-nur-lesen",level:2},{value:"Javascript (lesen/schreiben)",id:"javascript-lesenschreiben",level:2},{value:"Shell Script (lesen/schreiben)",id:"shell-script-lesenschreiben",level:2},{value:"Calc (nur lesen)",id:"calc-nur-lesen",level:2},{value:"Kombinierter Status (nur lesen)",id:"kombinierter-status-nur-lesen",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"Plugins k\xf6nnen verwendet werden, um verschiedene Ger\xe4te und externe Datenquellen in evcc zu integrieren. Diese k\xf6nnen \xfcber den Wert ",(0,i.kt)("inlineCode",{parentName:"p"},"custom")," des Parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," in ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/meters#custom"},(0,i.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4te), ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/chargers#type"},(0,i.kt)("inlineCode",{parentName:"a"},"charger"))," (Wallboxen) oder ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/vehicles#custom"},(0,i.kt)("inlineCode",{parentName:"a"},"vehicle"))," (Fahrzeuge) verwendet werden."),(0,i.kt)("p",null,"Plugins erlauben sowohl ",(0,i.kt)("em",{parentName:"p"},"Schreibenzugriff")," also auch ",(0,i.kt)("em",{parentName:"p"},"Lesezugriff"),". Wenn das Plugin zum ",(0,i.kt)("em",{parentName:"p"},"Schreiben")," verwendet wird, werden die Daten in Form von ",(0,i.kt)("inlineCode",{parentName:"p"},"${var[:format]}")," zur Verf\xfcgung gestellt. Wenn ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," nicht angegeben wird, werden die Daten im Standard ",(0,i.kt)("inlineCode",{parentName:"p"},"%v")," ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/pkg/fmt/"},"Go Format")," bereitgestellt. Die Variablen werden mit dem entsprechenden Wert ersetzt, bevor das Plugin ausgef\xfchrt wird."),(0,i.kt)("h2",{id:"modbus-lesenschreiben"},"Modbus (lesen/schreiben)"),(0,i.kt)("p",null,"Das ",(0,i.kt)("inlineCode",{parentName:"p"},"modbus")," Plugin kann Daten von jedem ModBus f\xe4higen Ger\xe4t oder SunSpec-kompatiblen Wechselrichter lesen. Viele Strommessger\xe4te sind bereits vorkonfiguriert (siehe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd#supported-devices"},"MBMD Supported Devices"),"). Es ist ebenfalls m\xf6glich Modbus Register zu Schreiben um weitere Wallboxen zu integrieren."),(0,i.kt)("p",null,"F\xfcr weitere Details siehe die ",(0,i.kt)("a",{parentName:"p",href:"modbus"},"Modbus Dokumentation")),(0,i.kt)("h2",{id:"mqtt-lesenschreiben"},"MQTT (lesen/schreiben)"),(0,i.kt)("p",null,"Das ",(0,i.kt)("inlineCode",{parentName:"p"},"mqtt")," Plugin erlaubt das Lesen von Werten \xfcber MQTT Topics. Das ist insbesondere f\xfcr Strommessger\xe4te n\xfctzlich, z.b. wenn diese ihre Daten bereits \xfcber MQTT bereitstellen.\nSiehe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd"},"MBMD")," f\xfcr ein Beispiel wie man Modbus Messdaten in MQTT bekommt. Das Plugin bietet auch die F\xe4higkeit JSON Datenstrukturen \xfcber jq-\xe4hnliche Abfragen zu lesen oder zu parsen (Siehe ",(0,i.kt)("a",{parentName:"p",href:"#http-readwrite"},"HTTP plugin"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: mqtt\ntopic: mbmd/sdm1-1/Power\ntimeout: 30s # don't accept values older than timeout\nscale: 0.001 # floating point factor applied to result, e.g. for Wh to kWh conversion\n")),(0,i.kt)("p",null,"F\xfcr den Schreibzugriff werden die Daten mit dem Attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," bereitgestellt. Falls dieser Paramter in der Konfiguration fehlt, wird der Wert im Standardformat geschrieben."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Schreiben"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: mqtt\ntopic: mbmd/charger/maxcurrent\npayload: ${var:%d}\n")),(0,i.kt)("h2",{id:"http-lesenschreiben"},"HTTP (lesen/schreiben)"),(0,i.kt)("p",null,"Das ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," Plugin f\xfchrt HTTP Aufrufe durch um Daten zu lesen oder zu aktualisieren. Es beinhaltet auch die F\xe4higkeit JSON Datenstrukturen \xfcber jq-\xe4hnliche Abfragen f\xfcr REST APIs zu lesen oder zu parsen. "),(0,i.kt)("p",null,"XML-Dokumente werden automatisch in JSON-Form \xfcberf\xfchrt, welche dann mit JQ und Regex weiter gefiltert werden k\xf6nnen."),(0,i.kt)("p",null,"F\xfcr den Test von JQ-Queries bietet sich das Online-Tool ",(0,i.kt)("a",{parentName:"p",href:"https://www.jsonquerytool.com/"},"https://www.jsonquerytool.com/")," und f\xfcr Regex-Tests das Online-Tool ",(0,i.kt)("a",{parentName:"p",href:"https://regex101.com/"},"https://regex101.com/")," an."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: http\nuri: https://volkszaehler/api/data/<uuid>.json?from=now\nmethod: GET # default HTTP method\nheaders:\n- content-type: application/json\nauth: # basic authorization\n  type: basic\n  user: foo\n  password: bar\ninsecure: false # set to true to trust self-signed certificates\njq: .data.tuples[0][1] # parse response json\nscale: 0.001 # floating point factor applied to result, e.g. for kW to W conversion\ntimeout: 10s # timeout in golang duration format, see https://golang.org/pkg/time/#ParseDuration\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Schreiben"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"body: %v # only applicable for PUT or POST requests\n")),(0,i.kt)("h2",{id:"websocket-nur-lesen"},"Websocket (nur lesen)"),(0,i.kt)("p",null,"Das ",(0,i.kt)("inlineCode",{parentName:"p"},"websocket")," Plugin bietet einen Websocket Listener. Es beinhaltet auch die F\xe4higkeit JSON Datenstrukturen \xfcber jq-\xe4hnliche Abfragen zu lesen oder zu parsen. Dies kann z.B. verwendet werden um Daten von Volksz\xe4hlers Push Server zu empfangen."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source: http\nuri: ws://<volkszaehler host:port>/socket\njq: .data | select(.uuid=="<uuid>") .tuples[0][1] # parse message json\nscale: 0.001 # floating point factor applied to result, e.g. for Wh to kWh conversion\ntimeout: 30s # error if no update received in 30 seconds\n')),(0,i.kt)("h2",{id:"smaspeedwire-nur-lesen"},"SMA/Speedwire (nur lesen)"),(0,i.kt)("p",null,"Das ",(0,i.kt)("inlineCode",{parentName:"p"},"sma")," Plugin bietet eine Schnittstelle zu SMA Ger\xe4ten welche das Speedwire Protokoll beherrschen."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source: sma\nuri: 192.168.4.51 # alternative to serial\nserial: 123456 # alternative to uri\nvalue: ActivePowerPlus # ID of value to read\npassword: "0000" # optional (default: 0000)\ninterface: eth0 # optional\nscale: 1 # optional scale factor for value\n')),(0,i.kt)("p",null,"Unterst\xfctzte Wert f\xfcr ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," k\xf6nnen in der Diagnoseausgabe \xfcber das Kommando ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc meter")," (mit konfigurierten SMA ",(0,i.kt)("inlineCode",{parentName:"p"},"meter")," Ger\xe4ten) gefunden werden."),(0,i.kt)("p",null,"Alle m\xf6glichen Werte k\xf6nnen als Konstanten ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/bboehmke/sunny/-/blob/master/values.go#L24"},"hier")," gefunden werden (verwende den Namen der Konstante f\xfcr ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),")."),(0,i.kt)("h2",{id:"javascript-lesenschreiben"},"Javascript (lesen/schreiben)"),(0,i.kt)("p",null,"evcc integriert einen Javascript Interpreter mit der ",(0,i.kt)("a",{parentName:"p",href:"https://underscorejs.org"},"Underscore.js")," Bibliothek, welche direkt \xfcber ",(0,i.kt)("inlineCode",{parentName:"p"},"_.")," zugreifbar ist, z.B. ",(0,i.kt)("inlineCode",{parentName:"p"},"_.random(0,5)"),". Das ",(0,i.kt)("inlineCode",{parentName:"p"},"js")," Plugin kann Javascript code \xfcber den ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," Parameter ausf\xfchren. Sehr hilfreich f\xfcr das schnelle Erstellen von Prototypen:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: js\nscript: |\n  var res = 500;\n  2 * res; // returns 1000\n")),(0,i.kt)("p",null,"Wenn das ",(0,i.kt)("inlineCode",{parentName:"p"},"js")," Plugin zum schreiben verwendet wird, wird der zu schreibenede Wert dem Script als Variable \xfcbergeben:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Schreiben"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"charger:\n- type: custom\n  maxcurrent:\n    source: js\n    script: |\n      console.log(maxcurrent);\n")),(0,i.kt)("h2",{id:"shell-script-lesenschreiben"},"Shell Script (lesen/schreiben)"),(0,i.kt)("p",null,"Das ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," Plugin f\xfchrt externe Skripte zum Lesen oder Aktualisieren von Daten aus. Das Plugin ist hilfreich um jede Art von externer Funktionalit\xe4t einzubinden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source: script\ncmd: /bin/bash -c "cat /dev/urandom"\ntimeout: 5s\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Schreiben"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: script\ncmd: /home/user/my-script.sh ${enable:%b} # format boolean enable as 0/1\ntimeout: 5s\n")),(0,i.kt)("h2",{id:"calc-nur-lesen"},"Calc (nur lesen)"),(0,i.kt)("p",null,"Das ",(0,i.kt)("inlineCode",{parentName:"p"},"calc")," Plugin erlaubt es die mehrere Einzelwerte mathematisch weiterzuverarbeiten:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: calc\nadd:\n- source: ...\n  ...\n- source: ...\n  ...\n")),(0,i.kt)("p",null,"Als Operanden werden dabei die Grundrechenarten Addition (add) und Multiplikation (mul) unterst\xfctzt.\nMit ",(0,i.kt)("inlineCode",{parentName:"p"},"scale: -1")," bei einem der Werte kann eine einfache Subtraktion durchgef\xfchrt werden, mit ",(0,i.kt)("inlineCode",{parentName:"p"},"scale: 0.001")," eine Division z. B. zur Konvertierung von kWh in Wh."),(0,i.kt)("p",null,"Das ",(0,i.kt)("inlineCode",{parentName:"p"},"calc")," Plugin ist hilfreich um z.B. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Leistungswerte von einzelnen PV-Strings zu summieren (addieren)"),(0,i.kt)("li",{parentName:"ul"},"Die Leistung aus Spannung und Strom zu berechnen (multiplizieren)"),(0,i.kt)("li",{parentName:"ul"},"Getrennte Leistungswerte f\xfcr Import und Export zu einem vorzeichenbehafteten Einzelwert zu kombinieren (subtrahieren)."),(0,i.kt)("li",{parentName:"ul"},"Prozentuale F\xfcllst\xe4nde zu berechnen (dividieren)")),(0,i.kt)("h2",{id:"kombinierter-status-nur-lesen"},"Kombinierter Status (nur lesen)"),(0,i.kt)("p",null,"Das ",(0,i.kt)("inlineCode",{parentName:"p"},"combined")," Status Plugin wird verwendet um gemischte Boolean Status Werte von ",(0,i.kt)("inlineCode",{parentName:"p"},"Plugged")," (angeschlossen) / ",(0,i.kt)("inlineCode",{parentName:"p"},"Charging")," (Laden) in einen evcc-kompatiblen Ladestatus von A..F zu konvertieren. Es wird z.b. zusammen mit einer OpenWB MQTT Integration verwendet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: combined\nplugged:\n  source: mqtt\n  topic: openWB/lp/1/boolPlugStat\ncharging:\n  source: mqtt\n  topic: openWB/lp/1/boolChargeStat\n")))}m.isMDXComponent=!0}}]);