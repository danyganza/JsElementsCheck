let get_id= document.getElementById(`header`)
get_id[`style`][`color`] = `purple`;
get_id[`style`][`fontSize`] = `5rempx`;

let get_class = document.getElementsByClassName(`.hello`)

let get_identity= document.getElementById(`money`)
get_identity.insertAdjacentHTML(`beforebegin`, `<p>I love money</p>`);
get_identity.insertAdjacentHTML(`afterend`, `<h3>Moneyis great</h3>`);
