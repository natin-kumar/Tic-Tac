let player ="X";
let arr=[,,,,,,,,,].fill('null',0,9);
console.log(arr);
let p1= document.getElementById('p1');
let p2 =document.getElementById('p2');
const btn=  document.getElementById('start');
let turn = document.querySelector('.turn');
const container= document.querySelector('.container');
btn.addEventListener('click',()=>{

    turn.innerHTML=`${p1.value} : X   ${p2.value} : O`;
})
function wincondition(){
    if(
        (arr[0]!='null'&&arr[0]==arr[1]&&arr[1]==arr[2])||
        (arr[3]!='null'&&arr[3]==arr[4]&&arr[4]==arr[5])||
        (arr[6]!='null'&&arr[6]==arr[7]&&arr[7]==arr[8])||
        arr[3]!='null'&&(arr[0]==arr[3]&&arr[3]==arr[6])||
        (arr[1]!='null'&&arr[1]==arr[4]&&arr[4]==arr[7])||
        (arr[5]!='null'&&arr[2]==arr[5]&&arr[5]==arr[8])||
        (arr[4]!='null'&&arr[0]==arr[4]&&arr[4]==arr[8])||
        (arr[2]!='null'&&arr[2]==arr[4]&&arr[4]==arr[6])

    ){return 1;}
    else 
    return 0;
}
function change(e)
{
    let id= Number(e.id);
    if(arr[id]=='null')
        {
            arr[id]=player;
            
        }
    else
    return;
    let data =document.getElementById(e.id);
    data.innerHTML=player;
    if(wincondition()==1)
        {
            const result= document.getElementById('result');
            if(player=='X')
                result.innerHTML=`${p1.value} is winner!`
            else
            {
                result.innerHTML=`${p2.value} is winner!`
            }
            container.style.display='none';
            return;
        }
    else
    player= player==="X"?"O":"X";

}