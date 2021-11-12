// Rifare l’esercizio della to do list:
// - stampare in pagina un item per ogni elemento contenuto in un array  
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: 
//digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

// la vostra variante sarà che:
// il vostro array nei data non avrà delle semplici stringhe, ma sarà un array di oggetti;
// gli oggetti avranno questo formato:
// { text: 'Fare la spesa', done: true }, 
// { text: 'Fare il bucato', done: false }
// etc. etc..

// quindi nell’elenco di output ciò che sara “done” sarà barrato, il resto invece con testo normale.
// Nella richiesta base mi limito al fatto che quel “done” nei task inseriti dall’utente sarà sempre false,
// gli unici true saranno alcuni nei dati di partenza.
// BONUS
// Gesticso i done dall’interfaccia,
// quindi il task potrà essere anche segnato come done e non per forza cancellato
// poi se l’utente vuole potrà anche cancellarlo del tutto.
var list = new Vue (
    {
        el:"#container",
        data:{
            newTextObj:"",
            toMade:"",
            object:[
                {
                    text:"Fare la spesa",
                    done: true,
                },
                {
                    text:"fare l'esercizio",
                    done: true,
                },
                {
                    text:"Impazzire per l'esercizio",
                    done: false,
                },
                {
                    text:"Aprire un tiket",
                    done: false,
                },
            ],
            
        },
        methods:{
            //selezionare l'oggetto della lista 
            objDone(pos){
                this.object[pos].done = true;
            },
            //aggiungere un elemento a object
            addObj(){
                //creazione nuovo oggetto da inserire nell'array
                let newObj = {
                    text: this.object.text = this.newTextObj,
                    done: this.object.done = false,
                };
                // console.log("text: ",this.newTextObj);
                // console.log(newObj);

                this.object.push(newObj)
                //reset testo input
                this.newTextObj = "";
            },
            //rimozione oggetto
            deleteObj(toDel){
                this.object.splice(toDel, 1);
            }
        }
        
    }
);