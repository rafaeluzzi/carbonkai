// =============================================
// XLinkKai webUI skin.js snippets
// Author Xtag : (KHB)GhOsTMaTa
// Autor Xtag : Prestige
// Author XTag : (TC)yasu
// ---------------------------------------------


//loading external files


	//Attaching onLoad
	
	
function chatToggle()
{
	var curW=$('panelCenter').style.width.replace(/\D+/g,'')*1;
	
	if ($('panelLeft').style.display=='none')
	{
		$('panelLeft').style.display='block';
		$('panelRight').style.display='block';
		$('panelCenter').style.width=curW-400+'px';
		$('chat').style.width=curW-390+'px';
		$('msg').style.width=curW-450+'px';
	}
	else
	{
		$('panelLeft').style.display='none';
		$('panelRight').style.display='none';
		$('panelCenter').style.width=curW+400+'px';
		$('chat').style.width=curW+390+'px';
		$('msg').style.width=curW+340+'px';
	}
	
}
function toggleLayer( whichLayer )
{
  var elem, vis;
  if( document.getElementById ) // this is the way the standards work
    elem = document.getElementById( whichLayer );
  else if( document.all ) // this is the way old msie versions work
      elem = document.all[whichLayer];
  else if( document.layers ) // this is the way nn4 works
    elem = document.layers[whichLayer];
  vis = elem.style;
  // if the style.display value is blank we try to figure it out here
  if(vis.display==''&&elem.offsetWidth!=undefined&&elem.offsetHeight!=undefined)
    vis.display = (elem.offsetWidth!=0&&elem.offsetHeight!=0)?'block':'none';
  vis.display = (vis.display==''||vis.display=='block')?'none':'block';
}


function skinInit()
{
	$('topNav').innerHTML+="<input class=\"blackBtn\" type=\"button\" value=\"Chat Only\" onclick=\"chatToggle();\">";
	$('topNav').innerHTML+="<input class=\"blackBtn\" type=\"button\" value=\"Extra Content\" onclick=\"toggleLayer('div1');\">";
	var divTag2 = document.createElement("div");
divTag2.id = "panelLeftB";
divTag2.setAttribute("class","submenu2");
divTag2.style.margin = "0px auto";
placeHolder2 = document.getElementById("panelLeft");
placeHolder2.appendChild(divTag2);	
$('panelLeftB').innerHTML+="<input id=\"btnArenas2\" class=\"blackBtn\" type=\"button\" value=\"Game Arenas\" onclick=\"showArenaView();\">";

document.getElementById('btnNavFav').style.display="none";
document.getElementById('kaiFavs').id="kaiFavs2";

var divTag4 = document.createElement("div");
divTag4.id = "favtittle";
divTag4.style.margin = "0px auto";
placeHolder4 = document.getElementById("menu");
placeHolder4.appendChild(divTag4);
$('favtittle').innerHTML+="Arena Bookmarks";
//new fav div
var divTag3 = document.createElement("div");
divTag3.id = "kaiFavs";
divTag3.style.float = "left";
placeHolder3 = document.getElementById("favtittle");
placeHolder3.appendChild(divTag3);
//new kaiFavs inner
var divTag7 = document.createElement("div");
divTag7.id = "kaiFavsInner";
divTag7.style.float = "left";
placeHolder7 = document.getElementById("kaiFavs");
placeHolder7.appendChild(divTag7);		
//myButton = document.createElement("input");
//myButton.type = "button";
//myButton.value = "my button";
//myButton.class = "submenu";
//placeHolder = document.getElementById("panelLeftB");
//placeHolder.appendChild(myButton);
//div for the playerfinder fav
var divTag10 = document.createElement("div");
divTag10.id = "playerfinderfav";
divTag10.setAttribute("align","left");
divTag10.style.margin = "0px auto";
divTag10.style.display = "none";
divTag10.innerHTML ="PERRRRRRRRRROOOOOOOOOOO";    
document.body.appendChild(divTag10);
	   
//extra content
	
	var divTag = document.createElement("div");
divTag.id = "div1";
divTag.setAttribute("align","left");
divTag.style.margin = "0px auto";

document.body.appendChild(divTag);
document.getElementById('div1').innerHTML = "<iframe id='extracontent' scrolling='no' src='/skin/html/widgets.html'></iframe>";


	
};
function resizeKai()
{
	var curH=pageHeight() > 400 ? pageHeight() : 400;
	var chatW=pageWidth() - 435;

	$('bigAssContainer').style.height=curH-20+'px';

	$('panelLeft').style.height=curH-20+'px';
	$('panelCenter').style.height=curH-20+'px';
	$('panelCenter').style.width=chatW+'px';
	$('panelRight').style.height=curH-20+'px';
	
	$('chatContainer').style.height=curH-250+'px';
	$('chat').style.height=curH-300+'px';
	$('chat').style.width=(chatW-6)+'px';
	$('skinSelect').style.height=curH-145+'px'
	$('skinSelect').style.width=(chatW-6)+'px';
	$('allPlayers').style.height=curH-155+'px';
	$('contacts').style.height=curH-155+'px';
	$('kaiVectors').style.height=curH-115+'px';
	$('kaiFavs').style.height=curH-5+'px';
	
	
	$('msg').style.width=chatW-50+'px';
	
}


function chatDisplayInvite(D,B)
{
	var A=50;
	if($("chat").childNodes.length>A){
		$("chat").removeChild($("chat").childNodes[0])
	}
	if(B){
	    var time = new Date();
	    var h = time.getHours();
	    var m = time.getMinutes();
	    var s = time.getSeconds();
	    var strTime = "[" + h + ":" + m + ":" + s + "]</br>";
		var C=document.createElement("div");
		C.innerHTML='<div class="chatUsername" style="background-color: #f4f4f4;">' + strTime + D + '</div><div class="chatText" style="background-color: #f4f4f4;">invites you to join <a href="#" onclick="switchArena(\''+B+"'); return false;\">"+B+"</a></div>";
		$("chat").appendChild(C);
		lastChatter=D
	}
	$("chat").scrollTop=$("chat").scrollHeight
}

function chat(E,B)
{
	var A=500;
	
	if($("chat").childNodes.length > A){
		$("chat").removeChild($("chat").childNodes[0])
	}
	
	if(B){
		B=unescape(B);
		B=B.replace(/</g,"&lt;");
		B=B.replace(/\x02/g,";");
		B=B.replace(/\n/g,"<br>");
		if(B.indexOf("anoyz")!=-1&&E=="prestige"){
			soundPlay("lolz");
			return
		}
		
		if(B.indexOf("/movearena")===0 && (mods.indexOf("/"+E.toLowerCase()+"/")!==-1 || admins.indexOf("/"+E.toLowerCase()+"/")!==-1)){
			switchArena(B.substring(B.indexOf(" ")+1));
			return 
		}
		
		if(B.indexOf(whoAmI)!=-1){
			B=B.replace(whoAmI,'<span class="highlight">'+whoAmI+"</span>")
			soundPlay("beep");
		}

		B=doEmoticons(B);
		B=B.replace(URLregex,' <a href="$2" target="_blank">$2</a> ');
		var D=document.createElement("div");
		var C="";

		if(mods.indexOf("/"+E.toLowerCase()+"/")!==-1){
			D.className="chatMod"
		}
		
		if(admins.indexOf("/"+E.toLowerCase()+"/")!==-1){
			D.className="chatAdmin"
		}
		
		if(lastChatter==E){
			E="&nbsp;"
		}
		else{
			lastChatter=E
		}
		
		if(E!="Kai Orbital Mesh"&&lastChatter!="Kai Orbital Mesh"){
			var time = new Date();
	        var h = time.getHours();
	        h += "";
	        var m = time.getMinutes();
	        m += "";
	        var strTime = "[" + h + ":" + m + "]";
		    D.innerHTML = "<table><tr><td class='time'>" + strTime + "</td><td class='chatUsername' onclick=\"$('msg').value+='" + E + "'; $('msg').focus();\">" + E + "</td><td class='chatText'>" + B + "</td></tr></table>"
		}
		else{
			D.innerHTML="<table><tr><td class='chatText'>"+B+"</td></tr></table>"
		}
		$("chat").appendChild(D)
	}
	$("chat").scrollTop=$("chat").scrollHeight
}
function soundToggle(){if($("kaiSounds")===null){return }if($("iconSound").className.indexOf("Off")!==-1){$("iconSound").className=$("iconSound").className.replace("Off","")}else{$("iconSound").className=$("iconSound").className+"Off"}var A=getFlashMovieObject("kaiSounds");A.soundToggle()
A.setPersist(true, 7)}
function logoRotate(){var A=$("logo").style.backgroundPosition;A=A.replace(/px.*$/,"");if(A<=-94||A==""){A=0}else{A=(A*1)-21}$("logo").style.backgroundPosition=A+"px"}

function switchArenaInit(B){
	
    var F = 0;
    if (vectors[B.toLowerCase()]) {
        var F = vectors[B.toLowerCase()].isprivate
    }
    allPlayers = new Object();
    vectors = new Object();
    chatHistory = new Array();
    lastChatter = "";
    clearDivs("allPlayers");
    clearDivs("chat");
    clearDivs("kaiVectors");
    $("headerPlayers").innerHTML = ui_strings.headerPlayers + " - 0";
    var E = B.substring(0, B.lastIndexOf("/"));
    if (E != "") {
        vectorAdd(["Previous Vector", E, 0, 0, 0, 0])
    }
    if (F == 1 || B.substring(B.lastIndexOf("/") + 1) == "" || B.substring(B.lastIndexOf("/") + 1) == whoAmI) {
        $("arenaIcon").src = "http://www.teamxlink.co.uk/media/avatars/default.jpg"
    }
    else {
        $("arenaIcon").src = "http://www.teamxlink.co.uk/media/avatars/" + B + ".jpg"
    }
    setTimeout("checkAvatar('arenaIcon');", 2000);
    var D = "";
    var G = B.split("/");
    var C = "";
    var H = (G.length > 1 ? G.length - 2 : 0);
    for (var A = 0; A < G.length; A++) {
        C += (A > 0 ? "/" : "") + G[A];
        D += (A > 0 ? "&nbsp;>&nbsp;" : "") + '<a href="#" onclick="switchArena(\'' + C + "'); return false;\">" + G[A] + "</a>"
    }
    D += '<div style="text-align: right;">';
    if (F == 0 && B.substring(B.lastIndexOf("/") + 1) != whoAmI) {
        if (favs[B.toLowerCase()]) {
            doNothing()
        }
        else {
            D += '<a href="#" onclick="favNew(\'' + B + '\'); return false;"><img src="/img/32.png" border="0" title="' + ui_strings.addFav + '"></a>&nbsp;'
        }
        D += '<a href="#" onclick="displayCreateArena(); return false;"><img src="/img/19.png" border="0" title="' + ui_strings.createPrivate + '"></a>&nbsp;'
    }
    var divTag6 = document.createElement("div");
divTag6.id = "playerfinder";
divTag6.setAttribute("align","left");
divTag6.style.margin = "0px auto";
  contenidofinder=encodeURI(B);
document.body.appendChild(divTag6);
document.getElementById('playerfinder').innerHTML ="<iframe class= 'playercss' src= 'http://playerfinder.crunchbite.org/find_players_ui.php?arenapath="+ contenidofinder +"'></iframe>";


    D += "</div>";
    if (B == "") {
        $("arenaCurrent").innerHTML = "General Chat"
    }
    else {
        $("arenaCurrent").innerHTML = D + '<div id="playerfinderbtn">'+"<input class=\"btnplayerfinder\" type=\"button\" value=\"Player Finder\" onclick=\"toggleLayer('playerfinder');\">" + '</div>'
    }
    setTimeout("sendToEngine('KAI_CLIENT_CHATMODE	" + (B != "" ? B : "General Chat") + "	');", 200);
    setTimeout("sendToEngine('KAI_CLIENT_GET_VECTORS	" + B + "	');", 200);
    curVector = B;
    updateArenaCommands()
}

/*function finderfav() {
	


}*/
function finderfavmulti(G,H) {
	contenido = encodeURI(G);
	avatar = H;
		document.getElementById('playerfinderfav').innerHTML ='<div id="PFtitle"><span class="tittle">Player Finder for '+G+"</span><input class=\"btnplayerfinder\" type=\"button\" value=\"close\" onclick=\"toggleLayer('playerfinderfav');\">"+'</div>';
	document.getElementById('playerfinderfav').innerHTML +='<div class="PFiframe">'+"<iframe class= 'playercss' src= 'http://playerfinder.crunchbite.org/find_players_ui.php?game="+ contenido +"'></iframe>"+ '</div>';
	document.getElementById('PFtitle').style.backgroundImage = "url('" + H + "')";
	//document.getElementById('playerfinderfav').innerHTML=contenido;
	// "<iframe class= 'playercss' src= 'http://playerfinder.crunchbite.org/find_players_ui.php?arenapath="+ A +"'></iframe>";
 	toggleLayer('playerfinderfav');
	if ($('playerfinder').style.display=='block')
	{ $('playerfinder').style.display='none';}
	
}

function favAdd(A){
    if (favs[A.toLowerCase()]) {
        return
    }
    else {
        favs[A.toLowerCase()] = {
            vector: A,
            myNode: 0
        }
    }
    var C = objReassign_myNode(favs, A);
    var D = "http://www.teamxlink.co.uk/media/avatars/" + A + ".jpg";
    var B = document.createElement("div");
  
      B.className = "kaiFavContainer";
      
    B.style.backgroundImage = "url('" + D + "')";
    B.onmouseover = function(){
        this.style.backgroundColor = "#9df"
    };
    B.onmouseout = function(){
        this.style.backgroundColor = "#fff"
    };
    
    
    B.innerHTML ='<div style="margin-left: 60px;">' + A.substring(A.lastIndexOf("/") + 1)  + '</div><div style="text-align: right;"><a href="#" onclick="favRemove(\'' + A + '\');" return false;><img src="/img/30.png" border="0" title="' + ui_strings.removeFav + '"></a>&nbsp;&nbsp;<a href="#" onclick="switchArena(\'' + A + '\');" return false;><img src="/img/05.png" border="0" title="' + ui_strings.go + '"></a>'+'&nbsp;&nbsp;</div><div style="margin-left: 60px;"></div>';
    B.innerHTML+="<input class=\"btnplayerfinder\" type=\"button\" value=\"find players\" onclick=\"finderfavmulti('"+ A.substring(A.lastIndexOf("/") + 1)+"','"+ D +"');\">";
    
    // <a href= "http://playerfinder.crunchbite.org/find_players_ui.php?arenapath='+ A +'">Find Players</a>
  //<input class=\"playerBtn\" type=\"button\" value=\"find players\" onclick=\"toggleLayer('playerfinderfav');\">
  ///?keepThis=true&TB_iframe=true&height=300&width=500" title="blank" class="smoothbox"
    if ($("kaiFavs").childNodes[C] == null) {
        $("kaiFavs").appendChild(B)
              
    }
    else {
        $("kaiFavs").insertBefore(B, $("kaiFavs").childNodes[C])
    }

	

}