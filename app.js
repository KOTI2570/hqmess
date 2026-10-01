const menus={
Sunday:{Breakfast:['Idly','Vada','Sambar','Coconut Chutney'],Lunch:['Rice','Dal','Vegetable Curry','Sambar','Curd'],Dinner:['Chapati','Paneer Curry','Rice','Dal']},
Monday:{Breakfast:['Dosa','Sambar','Chutney'],Lunch:['Rice','Dal','Beans Curry','Rasam','Curd'],Dinner:['Chapati','Dal','Mixed Veg']},
Tuesday:{Breakfast:['Upma','Chutney','Boiled Egg'],Lunch:['Rice','Sambar','Potato Curry','Dal','Curd'],Dinner:['Rice','Chicken Curry','Dal']},
Wednesday:{Breakfast:['Poori','Potato Curry','Tea'],Lunch:['Rice','Dal','Cabbage Curry','Sambar','Curd'],Dinner:['Chapati','Paneer Curry','Rice']},
Thursday:{Breakfast:['Idly','Vada','Sambar','Chutney'],Lunch:['Rice','Dal','Mixed Veg','Rasam','Curd'],Dinner:['Chapati','Egg Curry','Rice']},
Friday:{Breakfast:['Dosa','Sambar','Chutney'],Lunch:['Rice','Dal','Chicken Curry','Sambar','Curd'],Dinner:['Chapati','Veg Curry','Rice']},
Saturday:{Breakfast:['Poori','Idly','Sambar'],Lunch:['Special Rice','Dal','Chicken Curry','Sweet'],Dinner:['Biryani','Raita','Sweet']}
};
const extras=[['🥚','Boiled Egg','₹10'],['🍳','Omelette','₹20'],['🍗','Chicken Curry','₹60'],['🍚','Extra Rice','₹20'],['🥣','Curd','₹15'],['🥤','Cool Drink','₹25'],['🍨','Ice Cream','₹30'],['🍟','French Fries','₹40']];
const tea=[['☕','Tea'],['☕','Coffee'],['🍪','Biscuit'],['🥟','Samosa'],['🍘','Pakoda'],['🥪','Sandwich'],['🍪','Cutlet'],['🍞','Puff']];
const emojis=['🍛','🥗','🍲','🍚','🥘','🍗','🥣','🍽️'];
function renderDay(day){document.getElementById('selectedDay').textContent=day.toUpperCase();const data=menus[day];const cards=[['Breakfast','6:30 AM – 9:00 AM','☀️','breakfast'],['Lunch','12:00 PM – 2:00 PM','🍴','lunch'],['Dinner','7:00 PM – 9:00 PM','🌙','dinner']];document.getElementById('mealGrid').innerHTML=cards.map(([name,time,icon,cls],i)=>`<article class="meal-card ${cls}"><h3>${icon} ${name}</h3><span class="time">${time}</span><div class="meal-photo">${emojis[(i+day.length)%emojis.length]}</div><ul>${data[name].map((x,j)=>`<li>${x}</li>`).join('')}</ul></article>`).join('')}
document.querySelectorAll('.day').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.day').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderDay(btn.dataset.day)}));
document.querySelectorAll('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>{const el=document.getElementById(btn.dataset.target);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active')}));
document.getElementById('todayBtn').onclick=()=>document.querySelector('.today').scrollIntoView({behavior:'smooth'});
document.getElementById('extraGrid').innerHTML=extras.map(x=>`<div class="item-card"><div class="item-photo">${x[0]}</div><h4>${x[1]}</h4><div class="price">${x[2]}</div></div>`).join('');
document.getElementById('teaGrid').innerHTML=tea.map(x=>`<div class="item-card"><div class="item-photo">${x[0]}</div><h4>${x[1]}</h4></div>`).join('');
const days=Object.keys(menus);document.getElementById('weekCards').innerHTML=days.map((d,i)=>`<div class="week-card"><strong>${d}</strong><div class="mini">${emojis[i%emojis.length]}</div><div>${menus[d].Breakfast.slice(0,2).join(', ')}</div><button onclick="selectWeek('${d}')">View Menu</button></div>`).join('');window.selectWeek=(d)=>{document.querySelectorAll('.day').forEach(b=>b.classList.toggle('active',b.dataset.day===d));renderDay(d);document.querySelector('.today').scrollIntoView({behavior:'smooth'})};
renderDay('Sunday');
