
## What is the difference between null and undefined?

#### Ans: Undefined মানে হলো একটা variable declare করা হয়েছে কিন্ত এখানে এখনো কোনো মান বা value assign নাই অর্থাৎ এখনো কোনো value এই variable এ নাই ,এটা javascript নিজেই প্রদান করে। 
#### আর null হলো developer যখন একটা variable declare করে ইচ্ছা করে  এর মান ফাকা রাখে যাতে future এ সে নিজের দরকার মত এখানে মান/data রাখতে পারে।


## What is the use of the map() function in JavaScript? How is it different from forEach()?

#### Ans: map() function হলো একটা array method , যেটা একটা existing array এর উপর কাজ করে সবসময় একটা array return করে ,এটা মুল array এর কোনো পরিবর্তন করে না এবং এটি সবসময় একটি array return করে।
#### আর forEach() function কোনো কিছু return করে না এটি use করা হয় যখন একটা existing array এর উপর কোনো operation চালাতে চাই কিন্তু কোনো কিছু return আমাদের লাগবে না।

## What is the difference between == and ===?

#### Ans: ==  হলো equality অপারেটর যা মান/Value তুলনা করে কিন্তু ডেটা টাইপ ভিন্ন হলে টাইপ রূপান্তর করে,অর্থাৎ এটি শুধু মান check করে data type check করে না। অন্যদিকে, === হলো strict equality অপারেটর যা মান এবং ডেটা টাইপ উভয়ই পরীক্ষা করে। 

## What is the significance of async/await in fetching API data?

#### Ans: async/await javascript এ asynchronous operation সহজ ও readable করার জন্য use করা হয়। এটি asynchronous task যেমন data fetch etc কাজকে synchoronous ভাবে javascript execute করতে পারে। async function and await use করে একটা promise resolve না পর্যন্ত অপেক্ষা করতে পারি ফলে data fetch,post etc করতে অনেক সহজ হয় এবং error handling সহজ হয়। সংক্ষেপে, এটি asynchronous কাজকে readable, predictable এবং cleaner করে।


## Explain the concept of Scope in JavaScript (Global, Function, Block).

#### Ans: Scope হলো একটা environment বা place যেটার উপর নির্ভর করে একটা variable বা function কে কোথা থেকে access করা যাবে। Global Scope: যখন কোন variable কে কোনো ফাংশন বা ব্লকের বাইরে ডিক্লেয়ার করা হয়, সেটি হল গ্লোবাল স্কোপ । Function Scope:  যখন কোন variable কে কোনো ফাংশন এর ভেতর এ declare করা হয় তখন এই ভেরিয়েবল শুধুমাত্র এই  ফাংশনের ভেতর থেকে access করা যায় ,এটি হল function Scope। Block Scope: in es6 এ let const আসার পর এই scope পরিচিতি পাই , যখন কোন curly braces {.....} জেমনঃ(if,for etc) এর মাঝে varibale declare করা হয় তখন সেটিকে শুধু সেই ওই ব্লকের ভেতর হতেই access করা যায় এটি হল block Scope.
 
