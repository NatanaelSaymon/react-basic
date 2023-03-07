import colors from '../utils/colors.json'

export function useTemperature(temperature) {
    if(temperature < 0) {
        document.body.style.background = colors.freezing;
    } else if(temperature >= 0 && temperature < 15){
        document.body.style.background = colors.cold;
    } else if(temperature >= 15 && temperature < 26) {
        document.body.style.background = colors.moderate;
    } else if(temperature >= 26 && temperature < 40) {
        document.body.style.background = colors.hot;
    } else {
        document.body.style.background = colors.burning;
    }
}