var words;
var arr;
function awdarw(){
    words = document.getElementById("kiril").value;
    arr = words.split("");
    latynWords();
}

function latynWords() {
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'А': arr[i] = "A"; break;
			case 'а': arr[i] = "a"; break;
			case 'Ә': arr[i] = "Ae"; break;
			case 'ә': arr[i] = "ae"; break;
			case 'Б': arr[i] = "B"; break;
			case 'б': arr[i] = "b"; break;
			case 'В': arr[i] = "V"; break;
			case 'в': arr[i] = "v"; break;
			case 'Г': arr[i] = "G"; break;
			case 'г': arr[i] = "g"; break;
			case 'Ғ': arr[i] = "Gh"; break;
			case 'ғ': arr[i] = "gh"; break;
			case 'Д': arr[i] = "D"; break;
			case 'д': arr[i] = "d"; break;
			case 'Е': arr[i] = "E"; break;
			case 'е': arr[i] = "e"; break;
			// Ёё
			case 'Ж': arr[i] = "Zh"; break;
			case 'ж': arr[i] = "zh"; break;
			case 'З': arr[i] = "Z"; break;
			case 'з': arr[i] = "z"; break;
			case 'И':
			case 'І': arr[i] = "I"; break; 
			case 'и':
			case 'і': arr[i] = "i"; break;
			case 'Й': arr[i] = "J"; break;
			case 'й': arr[i] = "j"; break;
			case 'К': arr[i] = "K"; break;
			case 'к': arr[i] = "k"; break;
			case 'Қ': arr[i] = "Q"; break;
			case 'қ': arr[i] = "q"; break;
			case 'Л': arr[i] = "L"; break;
			case 'л': arr[i] = "l"; break;
			case 'М': arr[i] = "M"; break;
			case 'м': arr[i] = "m"; break;
			case 'Н': arr[i] = "N"; break;
			case 'н': arr[i] = "n"; break;
			case 'Ң': arr[i] = "Ng"; break;
			case 'ң': arr[i] = "ng"; break;
			case 'О': arr[i] = "O"; break;
			case 'о': arr[i] = "o"; break;
			case 'Ө': arr[i] = "Oe"; break;
			case 'ө': arr[i] = "oe"; break;
			case 'П': arr[i] = "P"; break;
			case 'п': arr[i] = "p"; break;
			case 'Р': arr[i] = "R"; break;
			case 'р': arr[i] = "r"; break;
			case 'С': arr[i] = "S"; break;
			case 'с': arr[i] = "s"; break;
			case 'Т': arr[i] = "T"; break;
			case 'т': arr[i] = "t"; break;
			case 'У': arr[i] = "W"; break;
			case 'у': arr[i] = "w"; break;
			case 'Ұ': arr[i] = "U"; break;
			case 'ұ': arr[i] = "u"; break;
			case 'Ү': arr[i] = "Ue"; break;
			case 'ү': arr[i] = "ue"; break;
			case 'Ф': arr[i] = "F"; break;
			case 'ф': arr[i] = "f"; break;
			case 'Х':
			case 'Һ': arr[i] = "H"; break;
			case 'х':
			case 'һ': arr[i] = "h"; break;
			case 'Ц': arr[i] = "C"; break;
			case 'ц': arr[i] = "c"; break;
			case 'Ч': arr[i] = "Ch"; break;
			case 'ч': arr[i] = "ch"; break;
			case 'Ш': arr[i] = "Sh"; break;
			case 'ш': arr[i] = "sh"; break;
			case 'Ы': arr[i] = "Y"; break;
			case 'ы': arr[i] = "y"; break;
			// Щщ, Ээ, Юю, Яя
			case 'Э': arr[i] = "E"; break;
			case 'э': arr[i] = "e"; break;
			case 'Ю': arr[i] = "Iw"; break;
			case 'ю': arr[i] = "iw"; break;
			case 'Я': arr[i] = "Ia"; break;
			case 'я': arr[i] = "ia"; break;
        }        
    }
    printWords();
}

function printWords() {
    var print = "";
    for (let i = 0; i < arr.length; i++) {
        print += arr[i];
    }
    document.getElementById("latyn").value = print;
}