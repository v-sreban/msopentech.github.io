/*jshint devel:true, smarttabs:true */jQuery(document).ready(function(){function e(e){var t=e.length;return t>=1&&t<10?"font-size : 24px":t>=10&&t<12?"font-size : 18px":t>=12&&t<30?"font-size : 14px":t>=30&&t<40?"font-size : 11px":"font-size : 12px"}function t(){var e=["#e84523","#a92e8c","#d77bae","#b92625","#fdb800","#de5e21","#f6e800"],t="";t=e[Math.round(Math.random()*6)];return t}function n(){var e=["left","top","right","bottom"],t=e[Math.round(Math.random()*3)];return t}$.ajax({type:"GET",url:"https://api.github.com/users/msopentech/repos",dataType:"json",success:function(r){for(var i in r){var s=e(r[i].name);$(".repository-thumbs").append("<div class='repo-single-thumb'><div class='triangle "+n()+"' style='border-right: 68px solid "+t()+";'></div><h2><a href='"+r[i].html_url+"' target='_blank' style='"+s+";'>"+r[i].name+"</a></h2></div>")}$("#repo_count").append("Total Repos: "+r.length)}})});