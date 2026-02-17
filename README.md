
## 1.What is the difference between null and undefined?

#### Ans: Undefined মানে হলো একটা variable declare করা হয়েছে কিন্ত এখানে এখনো কোনো মান বা value assign নাই অর্থাৎ variable বিদ্যমান, কিন্তু তার মান নির্ধারিত নয় এটা javascript নিজেই automatically প্রদান করে। 
#### অন্যদিকে, null হলো একটি intentional empty value, যা developer ইচ্ছাকৃতভাবে assign করে বোঝাতে যে বর্তমানে এখানে কোনো মান নেই  তবে ভবিষ্যতে প্রয়োজন অনুযায়ী এখানে মান প্রদান করা হতে পারে।।


## 2.What is the use of the map() function in JavaScript? How is it different from forEach()?

#### Ans: map() function হলো একটা array method , যেটা একটা existing array এর উপর কাজ করে সবসময় একটা নতুন array return করে ,এটা মুল array এর কোনো পরিবর্তন করে না।
#### অন্যদিকে, forEach() কোনো value return করে না। এটি existing array-এর উপরে operation চালানোর জন্য ব্যবহার করা হয়, কিন্তু কোনো নতুন array তৈরি করে না। আর এই দিক থেকেই map() forEach() থেকে আলাদা। 

## 3.What is the difference between == and ===?

#### Ans: ==  হলো equality অপারেটর যা মান/Value তুলনা করে কিন্তু ডেটা টাইপ ভিন্ন হলে টাইপ রূপান্তর করে,অর্থাৎ এটি শুধু মান check করে data type check করে না। অন্যদিকে, === হলো strict equality অপারেটর যা মান এবং ডেটা টাইপ উভয়ই পরীক্ষা করে। 

## What is the significance of async/await in fetching API data?

#### Ans: async/await javascript এ asynchronous operation সহজ ও readable করার জন্য use করা হয়। এটি asynchronous task যেমন data fetch বা API request-কে synchronous-এর মতো লেখা সম্ভব করে, যাতে code পড়তে এবং বুঝতে সহজ হয়।async function-এর মধ্যে await ব্যবহার করলে, একটি promise resolve না হওয়া পর্যন্ত execution অপেক্ষা করে, ফলে data fetching, posting বা অন্য asynchronous কাজগুলো সহজভাবে handle করা যায়। সংক্ষেপে, এটি asynchronous কাজকে readable, predictable এবং cleaner করে তোলে।


## Explain the concept of Scope in JavaScript (Global, Function, Block).

 Ans: Scope হলো একটা environment বা place যেটার উপর নির্ভর করে একটা variable বা function কে কোথা থেকে access করা যাবে। Global Scope: যখন কোন variable কে কোনো ফাংশন বা ব্লকের বাইরে ডিক্লেয়ার করা হয়, সেটি হল গ্লোবাল স্কোপ । Function Scope:  যখন কোন variable কে কোনো ফাংশন এর ভেতর এ declare করা হয় তখন এই ভেরিয়েবল শুধুমাত্র এই  ফাংশনের ভেতর থেকে access করা যায় ,এটি হল function Scope। Block Scope: in es6 এ let const আসার পর এই scope পরিচিতি পাই , যখন কোন curly braces {.....} জেমনঃ(if,for etc) এর মাঝে varibale declare করা হয় তখন সেটিকে শুধু সেই ওই ব্লকের ভেতর হতেই access করা যায় এটি হল block Scope.
 
