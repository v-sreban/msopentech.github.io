/*jshint devel:true, smarttabs:true */jQuery(document).ready(function(){function e(e){var t=e.length;return t>=1&&t<10?"font-size : 24px":t>=10&&t<12?"font-size : 18px":t>=12&&t<30?"font-size : 14px":t>=30&&t<40?"font-size : 11px":"font-size : 12px"}function t(){var e=["#e84523","#a92e8c","#d77bae","#b92625","#fdb800","#de5e21","#f6e800"],t="";t=e[Math.round(Math.random()*6)];return t}function n(){var e=["left","top","right","bottom"],t=e[Math.round(Math.random()*3)];return t}$.ajax({type:"GET",url:"https://api.github.com/users/msopentech/repos",dataType:"json",success:function(t){for(var n in t){var r=e(t[n].name);$(".repository-thumbs").append("<div class='repo-single-thumb'><h2><a href='"+t[n].html_url+"' target='_blank' style='"+r+";'>"+t[n].name+"</a></h2></div>")}$("#repo_count").append("Total Repos: "+t.length)}})});