class Billetes
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{
  var dinero;
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      e.push(new Billetes(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if(dinero > 0)
  {
    resultado.innerHTML = "No puedo entregar esa cantidad";
  }
  else
  {
    for(var en of e)
    {
      if(en.cantidad > 0)
      {
        resultado.innerHTML += en.cantidad + " billetes de $" + en.valor + "<br/>";
      }
    }
  }
}


var caja =[];
var e = [];
caja.push(new Billetes(100, 5));
caja.push(new Billetes(50, 10));
caja.push(new Billetes(20, 30));
caja.push(new Billetes(10, 30));
caja.push(new Billetes(5, 10));
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
