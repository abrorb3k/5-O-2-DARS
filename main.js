// 1. Funksiya uchun xato tashlash
// Shart:
//  Funksiya yozing, u berilgan sonni faktorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak:
//1- "Faktorialni hisoblash uchun musbat son kerak!"
// Funksiya try...catch orqali chaqirilganda:
// 2-Xato yuz bersa, konsolga "Xato yuz berdi: xato haqida xabar" yozilsin.
//3- Xato bo‘lmasa, natija qaytarilsin.

// function factorial(num){
//     if(num<0 && num!=Number){
//        throw new Error("Faqat musbat son yozish kerak!");
//     }
//      if (num == 0) {
//         return 1
//      }else{
//         return num*factorial(num-1)
//      }
// }
// let res=prompt("sonni kiritng")
// console.log(factorial(res));

// 2. Array bilan ishlashda xatolarni boshqarish

// Shart:
//  Funksiya yozing, u massiv ichidagi sonlarning o‘rtacha qiymatini hisoblaydi. Funksiyada quyidagi holatlar uchun xatolarni tutish kerak:
//1- Agar funksiya argument sifatida massiv qabul qilmasa yoki undefined bo‘lsa, xato tashlash kerak:
// Xato xabari: "Massiv uzatilmadi!".
//2- Agar massivda hech bo‘lmaganda bitta element son bo‘lmasa, xato tashlash kerak:
// Xato xabari: "Massivda faqat sonlar bo‘lishi kerak!".
// function average(arr){
//     if(typeof arr!='object' || arr==undefined){
//         throw new TypeError("Massiv noto'g'ri berildi")
//     }
//     let isExisTNumber=arr.some(value=>{
//         return typeof value=='number'
//     })
//     if(!isExisTNumber){
//         throw new Error("Icida kamida bitta son bo'lishi kerak")
//     }
//     let sum=0;
//     let counter=0;
//     arr.forEach(value => {
//       if(typeof value=='number'){
//         sum+=value;
//         counter++
//       }  
//     });
//     return sum/counter
// }
// try {
//     let res=[1,2,3,4,5,"Hello"]
//     console.log(average(res));  
// } catch (error) {
//     console.log(error);  
// }

//3- Xato yuz berganda try...catch orqali "Xato yuz berdi: xato haqida xabar" deb konsolga chiqaring.

// Funksiya xato bo‘lmasa, massivdagi barcha sonlarning o‘rtacha qiymatini qaytarishi kerak.

// 3. O‘z xatolik sinfini yaratish
// Shart:
// 1-O‘zingizning CustomError nomli xatolik sinfini yarating. Ushbu sinf konstruktoriga xabar va kod qabul qiladi (message va code).

//2- Funksiya yozing, u ikki sonni bo‘lishni bajaradi.

// Agar bo‘luvchi 0 bo‘lsa, CustomError yordamida "Bo‘luvchi nolga teng bo‘lmasligi kerak" deb xato tashlang.
//  Agar argumentlardan biri son bo‘lmasa, "Ikkala argument ham son bo‘lishi kerak" deb xato tashlang.

// 3-Funksiyani try...catch orqali chaqiring:

// Xato yuz bersa, console.error orqali xato xabarini va xato kodini chiqarish kerak.

// Xato bo‘lmasa, natijani qaytaring.
// function num(a,b){
//     if(b==0){
//         throw new Error("Bo'luvchi nolga teng bo'lishi mumkin emas"); 
//     }
//     return a/b
// }
// try {
//     console.log(num(12,0));
// } catch (error) {
//     console.log(error);

// }


//=======================Massivlarga oid masalalar============================


//==============================================================
//1-Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.
// function num(son){
//     let sum=0
//     for(let i=0;i<son.length;i++){
//         if(son[i]%2==0){
//             sum+=son[i]
//         }
//     }
//     return sum
// }
// let res=[1,2,3,4,5,6,7,8,9,10]
// console.log(num(res));

//==============================================================
//2-Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.
// let num=[1,2,3,4,5,6,7,8,9,10]
// let res= num.filter(value=>{
//     return value%2==0
// })
// console.log(res);

//==============================================================
//3-Funksiya yozing, massiv ichida nechta unikal element borligini aniqlaydigan.
// function num(massiv) {
//   let res = [];
//   for (let i = 0; i < massiv.length; i++) {
//     if (!res.includes(massiv[i])) {
//       res.push(massiv[i]);
//     }
//   }
//   return res.length;
// }
// let result=[1,2,2,2,3,4,5,6,7,8,9,10];
// console.log(num(result));

//==============================================================
//4-Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.
// function num(result){
// let res1 = Math.max(...result);
// let res2 = Math.min(...result);
// return res1-res2
// }
// let res=[1,2,3,4,5,6,7,8,9,10]
// console.log(num(res));

//==============================================================
//5-Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan.
// function num(son){
//   return  son.slice().reverse();
// }
// let res=[1,2,3,4,5,6,7,8,9,10]
// console.log(num(res));

//==============================================================
//6-Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.
//Tushunmadm

//==============================================================
//7-Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.
// function arr(text) {
//   return text.sort((a, b) => a.length - b.length);
// }
// let res=["Banana","Pineapple","Orange","Grapes"]
// console.log(arr(res));

//==============================================================
//8-Funksiya yozing, massivni ikki qismga bo‘lib, yangi massiv yaratadigan (birinchi yarmi va ikkinchi yarmi alohida massivlarda).
// function arr(num){
//     let res=Math.floor(num.length/2);

//     let first=num.slice(0,res);
//     let second=num.slice(res)
//     return[first,second]
// }
// let result=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr(result));

//==============================================================
//9-Funksiya yozing, massiv ichidan faqat musbat sonlarni yig‘ib yangi massiv yaratadigan.
// function num(son){
//    let res= son.filter(value=>value>0)
//     return res
// }
// let result = [-1, 2, -3, 4, 5, 6, -7, 8, 9, -10];
// console.log(num(result));

//==============================================================
//10-Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.
// function num(son){
//     let sum=0
//     for(let i=0;i<son.length;i++){
//       sum+=son[i]; 
//     }
//           return sum / son.length;
// } 
// let result=[1,2,3,4,5,6,7,8,9]
// console.log(num(result));

//==============================================================
//11-Funksiya yozing, massiv ichidagi barcha elementlarni ikki marta takrorlab qaytaradigan.
// function num(son){
//     let res=[]
// for(let i=0;i<son.length;i++){
//      res.push(son[i],son[i])
// }
//    return res;
// }
// let result=[1,2,3,4,5,6,7,8,9,10];
// console.log(num(result));

//==============================================================
//12-Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.
// function text(satr){
//     return satr.map(value=>value[0].toUpperCase()+value.slice(1))
// }
// let res=["hello","world","new","year"]
// console.log(text(res));

//==============================================================
//13-Funksiya yozing, massiv ichidagi raqamlar massivini saralash uchun, ammo tartibni belgilovchi flag qabul qilsin (o‘sish yoki kamayish tartibi).
//Tushunmadm

//==============================================================
//14-Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.
// function text(words){
//    let uzun=words[0];
//    let qisqa=words[0];
//    for(let i=0;i<words.length;i++){
//     if(words[i].length>uzun.length){
//         uzun=words[i]
//     }if (words[i].length < qisqa.lenght) 
//         qisqa=words[i]
//    }
//    return [qisqa, uzun];
// }
// let result=["Olma","Anor","Banan","Aplesin","Nok"]
// console.log(text(result));

//==============================================================
//15-Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).
// function num(son){
//   return  son.join("")
// }
// let result=[1,2,3,4,5,6,7,8,9,10];
// console.log(num(result));

//==============================================================
//16-Funksiya yozing, satr ichida nechta unli harf borligini qaytaradigan.
// function text(matn) {
//   const unlilar = "aeiouAEIOU";
//   let Soni = 0;
//   for (let i = 0; i < matn.length; i++) {
//     if (unlilar.includes(matn[i])) {
//       Soni++;
//     }
//   }

//   return Soni;
// }
// const result = "Hello World!";
// console.log(text(result));


//==============================================================
//17-Funksiya yozing, berilgan satrdan barcha probellarni olib tashlaydigan va yangi satr qaytaradigan.
// function text(matn){
//   return matn.trim();
// }
// let result="   Hello World!  ";
// console.log(text(result));


//==============================================================
//18-Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan.

//==============================================================
//19-Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.
// function text(matn){
//   let tex = matn.split(" ");
//   tex.sort((a,b)=>a.length-b.length)
//   return tex.join(" ")
// }
// let result = "javascript Hello Woorld developer";
// console.log(text(result));

//==============================================================
//20-Funksiya yozing, satr ichida ma’lum bir so‘z necha marta takrorlanganini aniqlaydigan.

//==============================================================
//21-Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.
// function text(matn){
//   return matn.toUpperCase();
// }
// let res="Hello world!";
// console.log(text(res));

//==============================================================
//22-Funksiya yozing, satrdagi barcha raqamlarni yig‘indisini hisoblaydigan.
// function text(matn) {
//   let sum = 0;
//   for (let i = 0; i < matn.length; i++) {
//     if (!isNaN(matn[i]) && matn[i]!==" ") {
//       sum+=parseInt(matn[i]);
//     }
//   }
//   return sum;
// }
// const res = "Hello 123,789 World 456!";
// console.log(text(res));

//==============================================================
//23-Funksiya yozing, satrdan faqat unikal harflarni qoldiradigan va takroriylarini olib tashlaydigan.

//==============================================================
//24-Funksiya yozing, satrdan barcha belgilarni o‘z o‘rniga teskari tartibda chiqaradigan.
//Tushunmadm

//==============================================================
//25-Funksiya yozing, satr ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartiradigan.
// function text(satr) {
//   return satr.map((value) => value[0].toUpperCase() + value.slice(1));
// }
// let res = ["hello", "world", "new", "year"];
// console.log(text(res));

//==============================================================
//26-Funksiya yozing, satrdan barcha so‘zlarni massivga ajratadigan va so‘zlarni alfavit tartibida qaytaradigan.
// function text(matn){
//   let tex=matn.split(" ");
//   tex.sort();
//   return tex
// }
// let res="Hello world javascript Apple"
// console.log(text(res));

//==============================================================
//27-Funksiya yozing, massiv ichidagi barcha so‘zlarni birlashtirib, yagona satr yaratadigan.
// function text(matn) {
//    return matn.join(" ");
// }
// let res = ["Hello", "world", "javascript" ,"Apple"];
// console.log(text(res));

//==============================================================
//28-Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.
// function text(words) {
//   let uzun = words[0];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > uzun.length) {
//       uzun = words[i];
//     }
//   }
//   return uzun
// }
// let result = ["Olma", "Anor", "Banan", "Aplesin", "Nok"];
// console.log(text(result));

//==============================================================
//29-Funksiya yozing, massiv ichidagi har bir elementni teskari qilib, yangi massiv qaytaradigan.
// function text(matn) {
//   return matn.map((element) => element.split("").reverse().join(""));
// }
// const res = ["Hello", "World!", "JavaScript"];
// console.log(text(res));

//==============================================================
//30-Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan.