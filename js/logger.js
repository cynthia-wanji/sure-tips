/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function logger(tag,message)
{
    var dev = true;
    if (window.location.host === 'localhost') {
        dev = 1;
    }

    if (dev)
    {
        console.log(tag+' '+message);
    }
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

