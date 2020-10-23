//CASO O SEU NAVEGADOR ESTEJA EM OUTRA LINGUA, MODIFIQUE OS INNERS TEXTS PARA A SUA LINGUAGEM



let pessoas = 0;
document.querySelectorAll('._8A5w5').forEach((item, index) => {
    setTimeout(() => {
        if (item.innerText == 'Seguindo') {
            item.click();
            document.querySelectorAll('.-Cab_').forEach(item => {
                if (item.innerText == 'Deixar de seguir') {
                    item.click();
                    pessoas++;
                    console.log(`Sua contagem de unfollowns é de: ${pessoas} pessoa(s)!`)
                }
            })
        }
    }, index * 20000); // <----- Segundos para realizar a ação 
});