function makeCloud()
{
	var text_ele;
	var text_array;

	text_ele = document.getElementById("tags");

	text_array = text_ele.innerHTML.split(" ");

	

	text_array = text_array.sort();

	var tag_fq = new Array();
	var tag_un = new Array();

	var size = text_array.length;

	for(var p = 0; p<size-1 ; p+=1)
	{
		var p_temp = p+1;
		tag_un.push(text_array[p]);
		
		while(text_array[p]==text_array[p_temp])
		{
			p_temp +=1;
		}


		tag_fq.push(p_temp-p);

		p=p_temp-1;
	}


	max_fq(tag_fq);

	span_func(tag_un);

	div.setAttribute("id", "tag_cloud_box");

	div.style.border = ".1em solid silver";

	div.style.background = "blue";

	div.style.fontFamily = "serif";

	div.style.fontSize = "x-large";

	div.style.color = "silver";


	tag_un_size = tag_un.length;

	var span_el = div.childNodes;

	//document.write(tag_un_size);

	var num;

	for(var t=0; t<tag_un_size; t++)
	{
		num = tag_fq[t];

		//document.write(num);

		num = num / max;

		num = num*20;

		num= Math.round(num);

		num = num +15;


		//document.write(num);
		//document.write(" ");

		num = num+"pt";


		span_el[t].style.fontSize=num;

				//span_el[t].addEventListener("click",function(alertSpan));

	}

	var div_eli = document.getElementById("eliminate");

	

	div_eli.parentNode.insertBefore(div, div_eli);

	div_eli.parentNode.removeChild(div_eli);

}

function max_fq(arr)
{
	max=0; // as I declare it with out "var" its a global variable

	var arr_size= arr.length;

	for(var j = 0; j < arr_size ; j+=1)
	{
		if(max < arr[j])
		{
			max = arr[j];
		}
	}
}

function span_func(arra)
{

	var arra_size=arra.length;
	
	div = document.createElement("div");

	var span

	for(var h = 0; h < arra_size; h++)
	{
		span = document.createElement("span");

		span.id = "tag" + h;

		span.innerHTML = arra[h] + " "; 
		div.appendChild(span);


		var new_span=document.getElementById("tag" + h);



		//new_span.setAttribute("onclick","alertTag(" + h + ")");				 
 	}

}



function saveCloud()
{
	var text_n = document.getElementById("tags");
	var text = text_n.value;
	text = "tag_cookie=" + text + ";";
	document.cookie = text;
}


function loadCloud()
{
	

	var cookie_str = document.cookie;

	var cookie_data = cookie_str.split();
	var cookie_value;

	for(var h = 0 ; h<cookie_data.length; h++)
	{
		var cooks = cookie_data[h].split("=");
		if(cooks[0] == "tag_cookie")
		{
			cookie_value = cooks[1];
		}
	}
	
	var text_n = document.getElementById("tags");
	text_n.value = cookie_value;

}


function clearArea()
{
	var text_a = document.getElementById("tags");
	
	text_a.value="";
	
}





















