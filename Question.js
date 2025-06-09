const questions = [
  // ===================== HTML =====================
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperloop Text Machine Language"
    ],
    answer: "Hyper Text Markup Language",
    category: "HTML"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    answer: "<style>",
    category: "HTML"
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
    category: "HTML"
  },
  {
    question: "How can you open a link in a new tab?",
    options: ['target="_blank"', 'target="_newtab"', 'new-tab="yes"', 'open="tab"'],
    answer: 'target="_blank"',
    category: "HTML"
  },
  {
    question: "What is the purpose of the <head> tag in HTML?",
    options: [
      "To define the main content",
      "To contain metadata",
      "To link styles",
      "To create a header section"
    ],
    answer: "To contain metadata",
    category: "HTML"
  },
  {
    question: "Which tag is used for inserting a horizontal line?",
    options: ["<hr>", "<line>", "<br>", "<separator>"],
    answer: "<hr>",
    category: "HTML"
  },
  {
    question: "What does the <title> tag do?",
    options: [
      "Adds a title to the body",
      "Sets the title of the webpage",
      "Adds heading",
      "Displays popup"
    ],
    answer: "Sets the title of the webpage",
    category: "HTML"
  },
  {
    question: "Which input type allows users to select a file?",
    options: ["text", "file", "image", "upload"],
    answer: "file",
    category: "HTML"
  },
  {
    question: "What is the correct tag for the largest heading?",
    options: ["<heading>", "<h1>", "<h6>", "<head>"],
    answer: "<h1>",
    category: "HTML"
  },
  {
    question: "What is the correct syntax to comment in HTML?",
    options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
    answer: "<!-- comment -->",
    category: "HTML"
  },
  {
    question: "Which tag is used to define a table row?",
    options: ["<tr>", "<td>", "<table>", "<th>"],
    answer: "<tr>",
    category: "HTML"
  },
  {
    question: "What does the <form> element do?",
    options: [
      "Displays a table",
      "Creates a structure",
      "Creates an input form",
      "Adds styling"
    ],
    answer: "Creates an input form",
    category: "HTML"
  },
  {
    question: "Which attribute is used to provide an alternate text for an image?",
    options: ["alt", "title", "src", "name"],
    answer: "alt",
    category: "HTML"
  },
  {
    question: "Which element represents a paragraph?",
    options: ["<p>", "<para>", "<text>", "<paragraph>"],
    answer: "<p>",
    category: "HTML"
  },
  {
    question: "What is semantic HTML?",
    options: [
      "Using <div> for all elements",
      "HTML with inline CSS",
      "Using tags with meaning",
      "Commented HTML code"
    ],
    answer: "Using tags with meaning",
    category: "HTML"
  },
  {
    question: "Which tag is used to embed an external webpage?",
    options: ["<frame>", "<iframe>", "<embed>", "<object>"],
    answer: "<iframe>",
    category: "HTML"
  },
  {
    question: "Which tag is used to group form elements?",
    options: ["<formgroup>", "<fieldset>", "<group>", "<section>"],
    answer: "<fieldset>",
    category: "HTML"
  },
  {
    question: "What does the <em> tag do?",
    options: ["Makes text italic", "Makes text bold", "Highlights text", "Strikes text"],
    answer: "Makes text italic",
    category: "HTML"
  },
  {
    question: "Which attribute specifies the character encoding in HTML?",
    options: ["charset", "encoding", "char", "set"],
    answer: "charset",
    category: "HTML"
  },
  {
    question: "What is the default method for submitting a form?",
    options: ["post", "get", "submit", "send"],
    answer: "get",
    category: "HTML"
  },
  {
    question: "What is the function of the <div> tag?",
    options: [
      "Creates a section",
      "Creates input field",
      "Creates heading",
      "Applies style"
    ],
    answer: "Creates a section",
    category: "HTML"
  },
  {
    question: "Which tag defines a list item?",
    options: ["<ul>", "<li>", "<ol>", "<list>"],
    answer: "<li>",
    category: "HTML"
  },
  {
    question: "Which tag is used to embed CSS in HTML?",
    options: ["<css>", "<style>", "<script>", "<link>"],
    answer: "<style>",
    category: "HTML"
  },
  {
    question: "Which tag is used to display a video?",
    options: ["<media>", "<movie>", "<video>", "<vid>"],
    answer: "<video>",
    category: "HTML"
  },
  {
    question: "What is the use of the <meta> tag?",
    options: [
      "Shows title",
      "Adds styles",
      "Stores metadata",
      "Inserts image"
    ],
    answer: "Stores metadata",
    category: "HTML"
  },{
    question: "Which CSS property is used to change the background color?",
    options: ["color", "bgcolor", "background", "background-color"],
    answer: "background-color",
    category: "CSS"
  },
  {
    question: "Which CSS property is used to center text?",
    options: ["align", "text-align", "text-center", "justify-content"],
    answer: "text-align",
    category: "CSS"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets"
    ],
    answer: "Cascading Style Sheets",
    category: "CSS"
  },
  {
    question: "Which property is used to make text bold?",
    options: ["font-weight", "font-style", "text-bold", "weight"],
    answer: "font-weight",
    category: "CSS"
  },
  {
    question: "How do you apply an external CSS file?",
    options: ["<style src='style.css'>", "<css href='style.css'>", "<link rel='stylesheet' href='style.css'>", "<script href='style.css'>"],
    answer: "<link rel='stylesheet' href='style.css'>",
    category: "CSS"
  },
  {
    question: "Which CSS property is used to change font?",
    options: ["font-type", "font-family", "text-font", "typeface"],
    answer: "font-family",
    category: "CSS"
  },
  {
    question: "Which value of position will make the element fixed on screen?",
    options: ["absolute", "relative", "fixed", "static"],
    answer: "fixed",
    category: "CSS"
  },
  {
    question: "What is the default position value of an element?",
    options: ["absolute", "relative", "static", "inherit"],
    answer: "static",
    category: "CSS"
  },
  {
    question: "How do you make a list without bullets?",
    options: ["list: none;", "bullet: none;", "list-style-type: none;", "ul-style: none;"],
    answer: "list-style-type: none;",
    category: "CSS"
  },
  {
    question: "How can you make a website responsive?",
    options: ["CSS Grid", "Using tables", "Media Queries", "Flexbox"],
    answer: "Media Queries",
    category: "CSS"
  },
  {
    question: "Which property is used for spacing inside elements?",
    options: ["margin", "padding", "spacing", "border"],
    answer: "padding",
    category: "CSS"
  },
  {
    question: "Which property is used to change the border color?",
    options: ["border-style", "border-color", "outline", "border-shade"],
    answer: "border-color",
    category: "CSS"
  },
  {
    question: "How do you apply a class in CSS?",
    options: [".class", "#class", "class", "@class"],
    answer: ".class",
    category: "CSS"
  },
  {
    question: "Which CSS unit is relative to the parent element?",
    options: ["px", "em", "vh", "%"],
    answer: "em",
    category: "CSS"
  },
  {
    question: "What is the Z-index used for?",
    options: ["Resize image", "Add shadow", "Layer order", "Text size"],
    answer: "Layer order",
    category: "CSS"
  },
  {
    question: "How to add shadow to a box?",
    options: ["box-shadow", "shadow-box", "text-shadow", "outer-shadow"],
    answer: "box-shadow",
    category: "CSS"
  },
  {
    question: "Which display value hides the element but keeps its space?",
    options: ["none", "hidden", "invisible", "visibility: hidden"],
    answer: "visibility: hidden",
    category: "CSS"
  },
  {
    question: "Which shorthand property sets all margin sides?",
    options: ["margin-all", "all-margin", "margin", "margin-set"],
    answer: "margin",
    category: "CSS"
  },
  {
    question: "Which property is used to make a rounded corner?",
    options: ["border-curve", "border-radius", "corner-round", "round-border"],
    answer: "border-radius",
    category: "CSS"
  },
  {
    question: "What does 'inherit' value do in CSS?",
    options: [
      "Uses default browser styles",
      "Inherits value from parent element",
      "Uses user-defined style",
      "Makes value null"
    ],
    answer: "Inherits value from parent element",
    category: "CSS"
  },
  {
    question: "What property changes text to uppercase?",
    options: ["text-transform", "font-style", "text-case", "transform"],
    answer: "text-transform",
    category: "CSS"
  },
  {
    question: "What is specificity in CSS?",
    options: [
      "How fast a rule is applied",
      "Priority of style rules",
      "CSS property type",
      "Selector limit"
    ],
    answer: "Priority of style rules",
    category: "CSS"
  },
  {
    question: "Which symbol is used for id selector?",
    options: [".", "*", "#", "$"],
    answer: "#",
    category: "CSS"
  },
  {
    question: "Which selector selects all elements?",
    options: [".", "#", "", "all"],
    answer: "*",
    category: "CSS"
  },
  {
    question: "What does the !important declaration do?",
    options: [
      "Removes rule",
      "Overrides all previous rules",
      "Applies animation",
      "Disables property"
    ],
    answer: "Overrides all previous rules",
    category: "CSS"
  },  // ===================== JavaScript =====================
  {
    question: "What will typeof NaN return?",
    options: ["NaN", "number", "undefined", "object"],
    answer: "number",
    category: "JavaScript"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Google", "Oracle"],
    answer: "Netscape",
    category: "JavaScript"
  },
  {
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "let", "const", "static"],
    answer: "let",
    category: "JavaScript"
  },
  {
    question: "What is the output of Boolean(0)?",
    options: ["true", "false", "null", "undefined"],
    answer: "false",
    category: "JavaScript"
  },
  {
    question: "Which function is used to write on console?",
    options: ["write()", "echo()", "console.write()", "console.log()"],
    answer: "console.log()",
    category: "JavaScript"
  },
  {
    question: "What does === mean in JS?",
    options: [
      "Assignment operator",
      "Equals and same type",
      "Only value equals",
      "Comparison without type check"
    ],
    answer: "Equals and same type",
    category: "JavaScript"
  },
  {
    question: "How do you write a function in JavaScript?",
    options: [
      "function = myFunc()",
      "def myFunc()",
      "function myFunc()",
      "create function myFunc()"
    ],
    answer: "function myFunc()",
    category: "JavaScript"
  },
  {
    question: "How do you call a function named myFunc?",
    options: ["call myFunc", "myFunc()", "call.myFunc()", "run(myFunc)"],
    answer: "myFunc()",
    category: "JavaScript"
  },
  {
    question: "Which method adds an element to end of array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    answer: "push()",
    category: "JavaScript"
  },
  {
    question: "Which method removes first array element?",
    options: ["pop()", "shift()", "splice()", "unshift()"],
    answer: "shift()",
    category: "JavaScript"
  },
  {
    question: "Which loop is best for iterating array?",
    options: ["for-in", "for-of", "while", "do-while"],
    answer: "for-of",
    category: "JavaScript"
  },
  {
    question: "How do you create an object?",
    options: [
      "let obj = []",
      "let obj = {}",
      "let obj = ()",
      "let obj = <>"
    ],
    answer: "let obj = {}",
    category: "JavaScript"
  },
  {
    question: "What is the result of null == undefined?",
    options: ["true", "false", "error", "NaN"],
    answer: "true",
    category: "JavaScript"
  },
  {
    question: "Which method converts array to string?",
    options: ["split()", "join()", "concat()", "slice()"],
    answer: "join()",
    category: "JavaScript"
  },
  {
    question: "Which method returns array length?",
    options: ["length()", "arr.size()", "arr.length", "size()"],
    answer: "arr.length",
    category: "JavaScript"
  },
  {
    question: "What does setTimeout do?",
    options: [
      "Pauses code forever",
      "Runs function after delay",
      "Loops function repeatedly",
      "Stops JS execution"
    ],
    answer: "Runs function after delay",
    category: "JavaScript"
  },
  {
    question: "How do you write an arrow function?",
    options: [
      "function => () {}",
      "() => {}",
      "function() => {}",
      "=> function() {}"
    ],
    answer: "() => {}",
    category: "JavaScript"
  },
  {
    question: "Which keyword handles exceptions?",
    options: ["throw", "catch", "try", "try-catch"],
    answer: "try-catch",
    category: "JavaScript"
  },
  {
    question: "How to convert string to integer?",
    options: ["parseInt()", "Number()", "both", "stringify()"],
    answer: "both",
    category: "JavaScript"
  },
  {
    question: "What is a closure in JS?",
    options: [
      "Function with return",
      "Inner function accessing outer variables",
      "Loop block",
      "Object method"
    ],
    answer: "Inner function accessing outer variables",
    category: "JavaScript"
  },
  {
    question: "What is this keyword in JS?",
    options: [
      "Current function",
      "Parent function",
      "Current object context",
      "None of the above"
    ],
    answer: "Current object context",
    category: "JavaScript"
  },
  {
    question: "What is event bubbling?",
    options: [
      "Multiple events on same element",
      "Event goes from parent to child",
      "Event propagates from child to parent",
      "Event blocked"
    ],
    answer: "Event propagates from child to parent",
    category: "JavaScript"
  },
  {
    question: "Which method is used to fetch API data?",
    options: ["fetch()", "get()", "axios()", "callAPI()"],
    answer: "fetch()",
    category: "JavaScript"
  },
  {
    question: "What is the result of 2 + '2'?",
    options: ["4", "22", "NaN", "undefined"],
    answer: "22",
    category: "JavaScript"
  },
  {
    question: "How do you prevent default browser action?",
    options: ["prevent()", "stopDefault()", "e.preventDefault()", "block()"],
    answer: "e.preventDefault()",
    category: "JavaScript"
  },
  // ===================== General =====================
  {
    question: "What does HTTP stand for?",
    options: [
      "Hyper Transfer Text Protocol",
      "Hyper Text Transfer Protocol",
      "High Text Transfer Protocol",
      "Hyperlink Transfer Text Protocol"
    ],
    answer: "Hyper Text Transfer Protocol",
    category: "General"
  },
  {
    question: "Which company created the Windows operating system?",
    options: ["Apple", "Google", "Microsoft", "IBM"],
    answer: "Microsoft",
    category: "General"
  },
  {
    question: "What is the brain of the computer?",
    options: ["RAM", "CPU", "Hard Disk", "Motherboard"],
    answer: "CPU",
    category: "General"
  },
  {
    question: "Which key is used to refresh a page in browser?",
    options: ["F2", "F5", "F11", "F1"],
    answer: "F5",
    category: "General"
  },
  {
    question: "Which one is not a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML",
    category: "General"
  },
  {
    question: "What is the extension of JavaScript file?",
    options: [".js", ".java", ".jv", ".javascript"],
    answer: ".js",
    category: "General"
  },
  {
    question: "What is the shortcut to copy text?",
    options: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    answer: "Ctrl + C",
    category: "General"
  },
  {
    question: "Which device is used to take printouts?",
    options: ["Scanner", "Printer", "Monitor", "Keyboard"],
    answer: "Printer",
    category: "General"
  },
  {
    question: "What is the full form of IP?",
    options: ["Internet Program", "Internal Protocol", "Internet Protocol", "Internal Program"],
    answer: "Internet Protocol",
    category: "General"
  },
  {
    question: "Which unit is used to measure memory?",
    options: ["Kg", "Cm", "Bytes", "Watt"],
    answer: "Bytes",
    category: "General"
  },
  {
    question: "Which web browser is developed by Google?",
    options: ["Safari", "Firefox", "Chrome", "Edge"],
    answer: "Chrome",
    category: "General"
  },
  {
    question: "What is the function of RAM in a computer?",
    options: [
      "To store permanent files",
      "To process images",
      "To store temporary data",
      "To increase internet speed"
    ],
    answer: "To store temporary data",
    category: "General"
  },
  {
    question: "What is a URL?",
    options: [
      "User Reference Link",
      "Uniform Resource Locator",
      "Uniform Referencing Link",
      "Universal Resource Locator"
    ],
    answer: "Uniform Resource Locator",
    category: "General"
  },
  {
    question: "Which is the most used search engine?",
    options: ["Bing", "Yahoo", "Google", "DuckDuckGo"],
    answer: "Google",
    category: "General"
  },
  {
    question: "What does PDF stand for?",
    options: [
      "Personal Document Format",
      "Printed Data Format",
      "Portable Document Format",
      "Page Description File"
    ],
    answer: "Portable Document Format",
    category: "General"
  },
  {
    question: "Which of these is an input device?",
    options: ["Monitor", "Keyboard", "Speaker", "Printer"],
    answer: "Keyboard",
    category: "General"
  },
  {
    question: "What is the main language of Android development?",
    options: ["Python", "C", "Kotlin", "Swift"],
    answer: "Kotlin",
    category: "General"
  },
  {
    question: "Which symbol is used for ID selector in CSS?",
    options: ["#", ".", "$", "&"],
    answer: "#",
    category: "General"
  },
  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Source Object Notation",
      "Java Syntax for Objects",
      "None of the above"
    ],
    answer: "JavaScript Object Notation",
    category: "General"
  },
  {
    question: "What is Git primarily used for?",
    options: [
      "Graphic Designing",
      "Version Control",
      "Deploying Websites",
      "Building UI"
    ],
    answer: "Version Control",
    category: "General"
  },
  {
    question: "Which tag is used for a hyperlink in HTML?",
    options: ["<link>", "<url>", "<a>", "<href>"],
    answer: "<a>",
    category: "General"
  },
  {
    question: "Which protocol is used for secure communication on web?",
    options: ["HTTP", "TCP", "HTTPS", "FTP"],
    answer: "HTTPS",
    category: "General"
  },
  {
    question: "Who founded Microsoft?",
    options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Larry Page"],
    answer: "Bill Gates",
    category: "General"
  },
  {
    question: "What is React mainly used for?",
    options: [
      "Game Development",
      "Server Management",
      "Building User Interfaces",
      "File Storage"
    ],
    answer: "Building User Interfaces",
    category: "General"
  },
  {
    question: "Which CSS property makes corners rounded?",
    options: ["corner", "border-radius", "round", "padding"],
    answer: "border-radius",
    category: "General"
  },
  //..........................Python ...........................


    {
        "question": "What is the correct file extension for Python files?",
        "options": [".py", ".pt", ".pyt", ".python"],
        "answer": ".py",
        "category": "Python"
    },
    {
        "question": "Which keyword is used to create a function in Python?",
        "options": ["function", "define", "def", "fun"],
        "answer": "def",
        "category": "Python"
    },
    {
        "question": "How do you insert comments in Python code?",
        "options": ["// this is a comment", "# this is a comment", "/* comment */", "-- comment"],
        "answer": "# this is a comment",
        "category": "Python"
    },
    {
        "question": "Which data type is immutable in Python?",
        "options": ["List", "Set", "Dictionary", "Tuple"],
        "answer": "Tuple",
        "category": "Python"
    },
    {
        "question": "Which method is used to add an item to a list?",
        "options": ["append()", "add()", "insert()", "push()"],
        "answer": "append()",
        "category": "Python"
    },
    {
        "question": "What will `type(10)` return?",
        "options": ["int", "<class 'int'>", "integer", "number"],
        "answer": "<class 'int'>",
        "category": "Python"
    },
    {
        "question": "What is the output of `len([1, 2, 3])`?",
        "options": ["3", "2", "1", "Error"],
        "answer": "3",
        "category": "Python"
    },
    {
        "question": "Which of these is a Python tuple?",
        "options": ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
        "answer": "(1, 2, 3)",
        "category": "Python"
    },
    {
        "question": "Which of the following is **not** a Python keyword?",
        "options": ["pass", "eval", "assert", "nonlocal"],
        "answer": "eval",
        "category": "Python"
    },
    {
        "question": "Which statement is used to handle exceptions?",
        "options": ["try-except", "do-catch", "if-error", "except-catch"],
        "answer": "try-except",
        "category": "Python"
    },
    {
        "question": "How do you create a variable with the floating number 2.8?",
        "options": ["x = float(2.8)", "x = 2.8f", "x = float:2.8", "x = 2,8"],
        "answer": "x = float(2.8)",
        "category": "Python"
    },
    {
        "question": "What will `print(bool(0))` output?",
        "options": ["True", "False", "0", "None"],
        "answer": "False",
        "category": "Python"
    },
    {
        "question": "How do you start a for loop in Python?",
        "options": ["for x in y:", "foreach x in y:", "loop x in y:", "for (x in y)"],
        "answer": "for x in y:",
        "category": "Python"
    },
    {
        "question": "What is the correct way to define a class in Python?",
        "options": ["class MyClass:", "MyClass class:", "define MyClass:", "object MyClass:"],
        "answer": "class MyClass:",
        "category": "Python"
    },
    {
        "question": "What is the result of `3 ** 2`?",
        "options": ["6", "9", "8", "Error"],
        "answer": "9",
        "category": "Python"
    },
    {
        "question": "What is the output of `'Python'[0]`?",
        "options": ["P", "y", "0", "n"],
        "answer": "P",
        "category": "Python"
    },
    {
        "question": "What does `range(5)` produce?",
        "options": ["0 to 5", "1 to 5", "0 to 4", "1 to 4"],
        "answer": "0 to 4",
        "category": "Python"
    },
    {
        "question": "Which of these is used to define a block of code in Python?",
        "options": ["Braces", "Parentheses", "Indentation", "Quotes"],
        "answer": "Indentation",
        "category": "Python"
    },
    {
        "question": "What is the result of `5 // 2` in Python?",
        "options": ["2.5", "2", "2.0", "Error"],
        "answer": "2",
        "category": "Python"
    },
    {
        "question": "Which function is used to get input from the user?",
        "options": ["get()", "scan()", "input()", "read()"],
        "answer": "input()",
        "category": "Python"
    },
    {
        "question": "What is the result of `bool('')`?",
        "options": ["True", "False", "None", "Error"],
        "answer": "False",
        "category": "Python"
    },
    {
        "question": "Which keyword is used to exit a loop?",
        "options": ["exit", "stop", "break", "return"],
        "answer": "break",
        "category": "Python"
    },
    {
        "question": "What does `list(range(3))` return?",
        "options": ["[1, 2, 3]", "[0, 1, 2, 3]", "[0, 1, 2]", "[1, 2]"],
        "answer": "[0, 1, 2]",
        "category": "Python"
    },
    {
        "question": "Which operator is used for string concatenation?",
        "options": ["&", "+", ".", "*"],
        "answer": "+",
        "category": "Python"
    },
    {
        "question": "How do you handle exceptions in Python?",
        "options": ["try/catch", "catch/try", "try/except", "except/try"],
        "answer": "try/except",
        "category": "Python"
    },


    // .................................Java

    
    {
        "question": "Which keyword is used to define a class in Java?",
        "options": ["class", "Class", "define", "struct"],
        "answer": "class",
        "category": "Java"
    },
    {
        "question": "Which method is the entry point of a Java program?",
        "options": ["start()", "main()", "run()", "init()"],
        "answer": "main()",
        "category": "Java"
    },
    {
        "question": "Which of these is not a Java keyword?",
        "options": ["static", "Boolean", "void", "private"],
        "answer": "Boolean",
        "category": "Java"
    },
    {
        "question": "Which symbol is used to inherit a class in Java?",
        "options": ["extends", "implements", "inherits", ":"],
        "answer": "extends",
        "category": "Java"
    },
    {
        "question": "Which of the following is a wrapper class in Java?",
        "options": ["int", "Integer", "float", "char"],
        "answer": "Integer",
        "category": "Java"
    },
    {
        "question": "Which package contains the Scanner class?",
        "options": ["java.util", "java.io", "java.lang", "java.scan"],
        "answer": "java.util",
        "category": "Java"
    },
    {
        "question": "What is the size of an `int` variable in Java?",
        "options": ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
        "answer": "4 bytes",
        "category": "Java"
    },
    {
        "question": "How do you create an object in Java?",
        "options": ["MyClass obj = new MyClass();", "MyClass obj();", "class obj = new class();", "MyClass obj = class();"],
        "answer": "MyClass obj = new MyClass();",
        "category": "Java"
    },
    {
        "question": "Which of these is the correct way to define a constructor?",
        "options": ["public MyClass()", "void MyClass()", "function MyClass()", "constructor MyClass()"],
        "answer": "public MyClass()",
        "category": "Java"
    },
    {
        "question": "Which keyword is used to create a subclass?",
        "options": ["extends", "subclass", "inherits", "instanceof"],
        "answer": "extends",
        "category": "Java"
    },
    {
        "question": "Which keyword is used to prevent inheritance?",
        "options": ["static", "final", "const", "immutable"],
        "answer": "final",
        "category": "Java"
    },
    {
        "question": "Which interface must be implemented to create a thread?",
        "options": ["Runnable", "Threadable", "Startable", "Concurrent"],
        "answer": "Runnable",
        "category": "Java"
    },
    {
        "question": "Which exception is thrown when a file is not found?",
        "options": ["FileNotFoundException", "IOException", "MissingFileException", "FileMissingException"],
        "answer": "FileNotFoundException",
        "category": "Java"
    },
    {
        "question": "What is the superclass of all Java classes?",
        "options": ["Object", "Class", "Main", "Root"],
        "answer": "Object",
        "category": "Java"
    },
    {
        "question": "Which collection class allows duplicate elements?",
        "options": ["List", "Set", "Map", "HashSet"],
        "answer": "List",
        "category": "Java"
    },
    {
        "question": "Which statement is used to handle exceptions in Java?",
        "options": ["try-catch", "try-except", "catch-except", "handle"],
        "answer": "try-catch",
        "category": "Java"
    },
    {
        "question": "Which keyword is used to inherit an interface?",
        "options": ["implements", "extends", "inherits", "interface"],
        "answer": "implements",
        "category": "Java"
    },
    {
        "question": "What will `System.out.println(10/0);` throw?",
        "options": ["ArithmeticException", "ZeroDivisionError", "IllegalArgumentException", "IOException"],
        "answer": "ArithmeticException",
        "category": "Java"
    },
    {
        "question": "What is the default value of a boolean variable in Java?",
        "options": ["false", "true", "0", "null"],
        "answer": "false",
        "category": "Java"
    },
    {
        "question": "Which of the following is used to read input from the console?",
        "options": ["Scanner", "BufferedReader", "InputReader", "Reader"],
        "answer": "Scanner",
        "category": "Java"
    },
    {
        "question": "Which access modifier allows visibility within the same package?",
        "options": ["default", "public", "private", "protected"],
        "answer": "default",
        "category": "Java"
    },
    {
        "question": "Which loop checks the condition after executing the loop body?",
        "options": ["do-while", "while", "for", "foreach"],
        "answer": "do-while",
        "category": "Java"
    },
    {
        "question": "What does JVM stand for?",
        "options": ["Java Virtual Machine", "Java Variable Module", "Java Visual Method", "Java Volume Manager"],
        "answer": "Java Virtual Machine",
        "category": "Java"
    },
    {
        "question": "Which keyword is used to call the superclass constructor?",
        "options": ["super", "this", "base", "parent"],
        "answer": "super",
        "category": "Java"
    },
    {
        "question": "Which of the following is a marker interface?",
        "options": ["Serializable", "Cloneable", "Readable", "Both Serializable and Cloneable"],
        "answer": "Both Serializable and Cloneable",
        "category": "Java"
    },

    // ...............................C language
    {
        "question": "Which of the following is used to declare a variable in C?",
        "options": ["int a;", "a = int;", "declare int a;", "var a;"],
        "answer": "int a;",
        "category": "C"
    },
    {
        "question": "Which symbol is used to end a statement in C?",
        "options": [";", ":", ".", ","],
        "answer": ";",
        "category": "C"
    },
    {
        "question": "Which of the following is a correct main function in C?",
        "options": ["int main()", "void main()", "function main()", "main void()"],
        "answer": "int main()",
        "category": "C"
    },
    {
        "question": "Which data type is used to store a character in C?",
        "options": ["char", "character", "string", "text"],
        "answer": "char",
        "category": "C"
    },
    {
        "question": "How do you print something in C?",
        "options": ["printf()", "print()", "echo()", "cout"],
        "answer": "printf()",
        "category": "C"
    },
    {
        "question": "Which header file is required for using `printf()`?",
        "options": ["stdio.h", "conio.h", "stdlib.h", "math.h"],
        "answer": "stdio.h",
        "category": "C"
    },
    {
        "question": "What is the correct syntax to take input in C?",
        "options": ["scanf()", "input()", "get()", "read()"],
        "answer": "scanf()",
        "category": "C"
    },
    {
        "question": "Which of these is a loop structure in C?",
        "options": ["for", "repeat", "loop", "iterate"],
        "answer": "for",
        "category": "C"
    },
    {
        "question": "Which operator is used for equality comparison in C?",
        "options": ["==", "=", "===", "!="],
        "answer": "==",
        "category": "C"
    },
    {
        "question": "What does `sizeof()` return?",
        "options": ["Size of a variable in bytes", "Value of variable", "Address of variable", "None"],
        "answer": "Size of a variable in bytes",
        "category": "C"
    },
    {
        "question": "Which of these is a valid pointer declaration?",
        "options": ["int *ptr;", "ptr int;", "*int ptr;", "int ptr*;"],
        "answer": "int *ptr;",
        "category": "C"
    },
    {
        "question": "What is a correct way to declare a constant in C?",
        "options": ["const int x = 10;", "int const x = 10;", "#define x 10", "All of the above"],
        "answer": "All of the above",
        "category": "C"
    },
    {
        "question": "Which function is used to allocate memory dynamically?",
        "options": ["malloc()", "calloc()", "realloc()", "All of the above"],
        "answer": "All of the above",
        "category": "C"
    },
    {
        "question": "What is the index of the first element in an array in C?",
        "options": ["0", "1", "-1", "Depends"],
        "answer": "0",
        "category": "C"
    },
    {
        "question": "What is the keyword used to return a value from a function?",
        "options": ["return", "exit", "stop", "send"],
        "answer": "return",
        "category": "C"
    },
    {
        "question": "Which of the following is the address operator in C?",
        "options": ["&", "*", "#", "@"],
        "answer": "&",
        "category": "C"
    },
    {
        "question": "What is the extension of a C source file?",
        "options": [".c", ".cpp", ".cs", ".java"],
        "answer": ".c",
        "category": "C"
    },
    {
        "question": "Which keyword is used to define a structure in C?",
        "options": ["struct", "structure", "record", "object"],
        "answer": "struct",
        "category": "C"
    },
    {
        "question": "What is the size of an `int` typically on a 32-bit system?",
        "options": ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
        "answer": "4 bytes",
        "category": "C"
    },
    {
        "question": "Which function is used to copy strings in C?",
        "options": ["strcpy()", "copy()", "strdup()", "strcat()"],
        "answer": "strcpy()",
        "category": "C"
    },
    {
        "question": "Which loop will execute at least once even if the condition is false?",
        "options": ["do-while", "while", "for", "if"],
        "answer": "do-while",
        "category": "C"
    },
    {
        "question": "What is a pointer to a pointer in C called?",
        "options": ["Double pointer", "Multi pointer", "Pointer array", "Pointer table"],
        "answer": "Double pointer",
        "category": "C"
    },
    {
        "question": "Which keyword is used to include header files?",
        "options": ["#include", "import", "load", "require"],
        "answer": "#include",
        "category": "C"
    },
    {
        "question": "What is the output of `5 % 2` in C?",
        "options": ["1", "2", "0", "2.5"],
        "answer": "1",
        "category": "C"
    },
    {
        "question": "Which storage class stores variables in CPU registers?",
        "options": ["register", "auto", "static", "extern"],
        "answer": "register",
        "category": "C"
    },


    // .............................React 

    
    {
        "question": "What is React primarily used for?",
        "options": ["Building user interfaces", "Server-side scripting", "Database management", "Mobile development"],
        "answer": "Building user interfaces",
        "category": "React"
    },
    {
        "question": "Which company developed React?",
        "options": ["Facebook", "Google", "Microsoft", "Twitter"],
        "answer": "Facebook",
        "category": "React"
    },
    {
        "question": "What is the correct syntax to create a functional component in React?",
        "options": [
            "function MyComponent() {}",
            "component MyComponent() {}",
            "const MyComponent = createComponent()",
            "new Component MyComponent()"
        ],
        "answer": "function MyComponent() {}",
        "category": "React"
    },
    {
        "question": "What is JSX?",
        "options": [
            "A syntax extension for JavaScript",
            "A new programming language",
            "A type of CSS",
            "A JSON format"
        ],
        "answer": "A syntax extension for JavaScript",
        "category": "React"
    },
    {
        "question": "Which hook is used to manage state in functional components?",
        "options": ["useState", "useEffect", "useContext", "useRef"],
        "answer": "useState",
        "category": "React"
    },
    {
        "question": "What does the `useEffect` hook do?",
        "options": [
            "Performs side effects in components",
            "Manages local state",
            "Handles form input",
            "Stores global data"
        ],
        "answer": "Performs side effects in components",
        "category": "React"
    },
    {
        "question": "What is the virtual DOM?",
        "options": [
            "A lightweight copy of the real DOM",
            "A JavaScript object",
            "A React module",
            "A server-side API"
        ],
        "answer": "A lightweight copy of the real DOM",
        "category": "React"
    },
    {
        "question": "Which method is used to render React elements into the DOM?",
        "options": ["ReactDOM.render()", "render()", "React.render()", "display()"],
        "answer": "ReactDOM.render()",
        "category": "React"
    },
    {
        "question": "Which of the following is used to pass data to a component?",
        "options": ["props", "state", "hooks", "bind"],
        "answer": "props",
        "category": "React"
    },
    {
        "question": "Which hook is used to access context in React?",
        "options": ["useContext", "useRef", "useMemo", "useReducer"],
        "answer": "useContext",
        "category": "React"
    },
    {
        "question": "In which lifecycle phase is `componentDidMount()` called?",
        "options": ["Mounting", "Updating", "Unmounting", "Rendering"],
        "answer": "Mounting",
        "category": "React"
    },
    {
        "question": "Which of the following is true about React keys?",
        "options": [
            "They help React identify which items changed",
            "They are required for all HTML elements",
            "They are only used in forms",
            "They change component state"
        ],
        "answer": "They help React identify which items changed",
        "category": "React"
    },
    {
        "question": "What does `setState()` do?",
        "options": [
            "Updates component state",
            "Creates a new state",
            "Deletes state",
            "Resets component"
        ],
        "answer": "Updates component state",
        "category": "React"
    },
    {
        "question": "Which tool can be used to debug React apps?",
        "options": ["React Developer Tools", "Chrome Inspector", "Redux DevTools", "JSX Parser"],
        "answer": "React Developer Tools",
        "category": "React"
    },
    {
        "question": "What is a higher-order component (HOC)?",
        "options": [
            "A function that takes a component and returns a new component",
            "A class component with extra state",
            "A hook for global state",
            "A Redux middleware"
        ],
        "answer": "A function that takes a component and returns a new component",
        "category": "React"
    },
    {
        "question": "How can you optimize performance in a React app?",
        "options": ["Using React.memo", "Avoiding state", "Using class components only", "Always using props"],
        "answer": "Using React.memo",
        "category": "React"
    },
    {
        "question": "Which command creates a new React app using Create React App?",
        "options": [
            "npx create-react-app myApp",
            "npm install react-app",
            "react new myApp",
            "npm new react"
        ],
        "answer": "npx create-react-app myApp",
        "category": "React"
    },
    {
        "question": "What does `useRef` return?",
        "options": ["A mutable ref object", "A JSX element", "A state variable", "An event handler"],
        "answer": "A mutable ref object",
        "category": "React"
    },
    {
        "question": "What happens if you update state directly in React?",
        "options": [
            "Component won’t re-render properly",
            "State updates normally",
            "Props are modified",
            "The app crashes"
        ],
        "answer": "Component won’t re-render properly",
        "category": "React"
    },
    {
        "question": "How do you handle forms in React?",
        "options": ["Controlled components", "Vanilla JS only", "Only with Redux", "Using jQuery"],
        "answer": "Controlled components",
        "category": "React"
    },
    {
        "question": "Which attribute is used for conditional rendering?",
        "options": ["ternary operator", "className", "if-else", "condition"],
        "answer": "ternary operator",
        "category": "React"
    },
    {
        "question": "What is the default port for running a React development server?",
        "options": ["3000", "8080", "5000", "8000"],
        "answer": "3000",
        "category": "React"
    },
    {
        "question": "Which of these is a valid way to pass a function as a prop?",
        "options": [
            "<Child onClick={this.handleClick} />",
            "<Child handleClick()>",
            "<Child click=this.handleClick />",
            "<Child function={handleClick} />"
        ],
        "answer": "<Child onClick={this.handleClick} />",
        "category": "React"
    },
    {
        "question": "Which of the following is a hook used to manage complex state logic?",
        "options": ["useReducer", "useRef", "useCallback", "useMemo"],
        "answer": "useReducer",
        "category": "React"
    },
    {
        "question": "What is React Router used for?",
        "options": [
            "Navigation between views",
            "Managing state",
            "Connecting APIs",
            "Styling components"
        ],
        "answer": "Navigation between views",
        "category": "React"
    },


    //.................................................. Number system 

    
    {
        "question": "What is the binary equivalent of the decimal number 25?",
        "options": ["11001", "10101", "11111", "10011"],
        "answer": "11001",
        "category": "Number System"
    },
    {
        "question": "What is the decimal equivalent of binary number 10110?",
        "options": ["22", "20", "18", "26"],
        "answer": "22",
        "category": "Number System"
    },
    {
        "question": "Which of the following is a valid hexadecimal number?",
        "options": ["2F", "G7", "H3", "28Z"],
        "answer": "2F",
        "category": "Number System"
    },
    {
        "question": "Which base is used in the octal number system?",
        "options": ["8", "16", "10", "2"],
        "answer": "8",
        "category": "Number System"
    },
    {
        "question": "What is the hexadecimal equivalent of the binary number 1111?",
        "options": ["F", "E", "D", "C"],
        "answer": "F",
        "category": "Number System"
    },
    {
        "question": "What is the range of values in a 4-bit binary system?",
        "options": ["0 to 15", "1 to 15", "0 to 16", "1 to 16"],
        "answer": "0 to 15",
        "category": "Number System"
    },
    {
        "question": "How many bits are there in one byte?",
        "options": ["8", "4", "2", "16"],
        "answer": "8",
        "category": "Number System"
    },
    {
        "question": "What is the binary representation of the octal number 7?",
        "options": ["111", "011", "110", "101"],
        "answer": "111",
        "category": "Number System"
    },
    {
        "question": "Which of the following binary numbers is equivalent to the decimal number 10?",
        "options": ["1010", "1001", "1100", "1111"],
        "answer": "1010",
        "category": "Number System"
    },
    {
        "question": "Which conversion is correct for decimal 255?",
        "options": ["Binary: 11111111", "Hex: 1F", "Octal: 288", "Binary: 10101010"],
        "answer": "Binary: 11111111",
        "category": "Number System"
    },
    {
        "question": "What is the result of adding binary 1101 and 1011?",
        "options": ["11000", "10110", "10001", "11110"],
        "answer": "11000",
        "category": "Number System"
    },
    {
        "question": "Which of the following is the smallest unit of data in computing?",
        "options": ["Bit", "Byte", "Nibble", "Word"],
        "answer": "Bit",
        "category": "Number System"
    },
    {
        "question": "Which radix is used in the hexadecimal number system?",
        "options": ["16", "10", "8", "2"],
        "answer": "16",
        "category": "Number System"
    },
    {
        "question": "Which number system uses digits 0 and 1 only?",
        "options": ["Binary", "Decimal", "Hexadecimal", "Octal"],
        "answer": "Binary",
        "category": "Number System"
    },
    {
        "question": "How many different values can be represented with 3 bits?",
        "options": ["8", "6", "4", "10"],
        "answer": "8",
        "category": "Number System"
    },
    {
        "question": "What is a nibble?",
        "options": ["4 bits", "2 bits", "8 bits", "16 bits"],
        "answer": "4 bits",
        "category": "Number System"
    },
    {
        "question": "Which of the following represents the decimal number 100 in binary?",
        "options": ["1100100", "1010100", "1110000", "1000001"],
        "answer": "1100100",
        "category": "Number System"
    },
    {
        "question": "What is the binary equivalent of hexadecimal A?",
        "options": ["1010", "1000", "1100", "1110"],
        "answer": "1010",
        "category": "Number System"
    },
    {
        "question": "Which of the following is not a valid binary number?",
        "options": ["1021", "1001", "110", "0"],
        "answer": "1021",
        "category": "Number System"
    },
    {
        "question": "Which conversion is required to execute instructions stored in memory?",
        "options": ["Binary to Machine code", "Hex to Decimal", "Decimal to Binary", "Octal to Decimal"],
        "answer": "Decimal to Binary",
        "category": "Number System"
    },
    {
        "question": "Which number system is most suitable for computers?",
        "options": ["Binary", "Decimal", "Octal", "Hexadecimal"],
        "answer": "Binary",
        "category": "Number System"
    },
    {
        "question": "What is 1's complement of 1010?",
        "options": ["0101", "1001", "1111", "1101"],
        "answer": "0101",
        "category": "Number System"
    },
    {
        "question": "What is 2's complement of 0101?",
        "options": ["1011", "1010", "1101", "0111"],
        "answer": "1011",
        "category": "Number System"
    },
    {
        "question": "Which of the following number systems is not positional?",
        "options": ["Roman", "Decimal", "Binary", "Octal"],
        "answer": "Roman",
        "category": "Number System"
    },
    {
        "question": "What is the decimal value of hexadecimal FF?",
        "options": ["255", "256", "254", "128"],
        "answer": "255",
        "category": "Number System"
    },


    // Data Communication and Networking

  
    {
        "question": "Which device operates at the Data Link layer of the OSI model?",
        "options": ["Switch", "Router", "Hub", "Gateway"],
        "answer": "Switch",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What is the main function of a router?",
        "options": ["Forward data packets between networks", "Connect devices in a LAN", "Boost signal strength", "Encrypt data"],
        "answer": "Forward data packets between networks",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which protocol is used to assign IP addresses automatically?",
        "options": ["DHCP", "FTP", "DNS", "HTTP"],
        "answer": "DHCP",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which layer of the OSI model is responsible for end-to-end delivery?",
        "options": ["Transport", "Network", "Session", "Data Link"],
        "answer": "Transport",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which of the following is a connectionless protocol?",
        "options": ["UDP", "TCP", "FTP", "SMTP"],
        "answer": "UDP",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What does IP stand for?",
        "options": ["Internet Protocol", "Interface Protocol", "Internal Protocol", "Interchange Packet"],
        "answer": "Internet Protocol",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which protocol is used for secure communication over the web?",
        "options": ["HTTPS", "FTP", "TELNET", "HTTP"],
        "answer": "HTTPS",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What is the full form of MAC in networking?",
        "options": ["Media Access Control", "Multiple Access Channel", "Main Access Control", "Memory Access Channel"],
        "answer": "Media Access Control",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which device regenerates and amplifies signals?",
        "options": ["Repeater", "Bridge", "Router", "Hub"],
        "answer": "Repeater",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What is the maximum length of an IPv4 address?",
        "options": ["32 bits", "64 bits", "128 bits", "16 bits"],
        "answer": "32 bits",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which topology connects each device to every other device?",
        "options": ["Mesh", "Star", "Bus", "Ring"],
        "answer": "Mesh",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which protocol translates domain names into IP addresses?",
        "options": ["DNS", "DHCP", "ARP", "FTP"],
        "answer": "DNS",
        "category": "Data Communication and Networking"
    },
    {
        "question": "In which OSI layer does encryption occur?",
        "options": ["Presentation", "Transport", "Network", "Application"],
        "answer": "Presentation",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What is the function of the ARP protocol?",
        "options": ["Resolve IP to MAC address", "Encrypt data packets", "Manage routing tables", "Control error rates"],
        "answer": "Resolve IP to MAC address",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which type of transmission sends data in both directions simultaneously?",
        "options": ["Full-duplex", "Half-duplex", "Simplex", "Unidirectional"],
        "answer": "Full-duplex",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which port does HTTP use by default?",
        "options": ["80", "21", "23", "443"],
        "answer": "80",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What is a subnet mask used for?",
        "options": ["Dividing IP addresses into network and host parts", "Routing data", "Encrypting IP addresses", "Transmitting packets"],
        "answer": "Dividing IP addresses into network and host parts",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What is the purpose of a firewall?",
        "options": ["To block unauthorized access", "To regulate power supply", "To backup data", "To host websites"],
        "answer": "To block unauthorized access",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which layer handles logical addressing in the OSI model?",
        "options": ["Network", "Transport", "Data Link", "Physical"],
        "answer": "Network",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which one of these is a wireless communication protocol?",
        "options": ["Bluetooth", "Ethernet", "Token Ring", "Coaxial"],
        "answer": "Bluetooth",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which device connects different networks together?",
        "options": ["Router", "Switch", "Repeater", "Bridge"],
        "answer": "Router",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What is the function of TCP?",
        "options": ["Provides reliable, ordered, and error-checked delivery", "Broadcasts data", "Encrypts email", "Assigns IP addresses"],
        "answer": "Provides reliable, ordered, and error-checked delivery",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What kind of addressing is used by Ethernet?",
        "options": ["MAC addressing", "IP addressing", "Port addressing", "Host addressing"],
        "answer": "MAC addressing",
        "category": "Data Communication and Networking"
    },
    {
        "question": "Which network type covers a large geographic area?",
        "options": ["WAN", "LAN", "MAN", "PAN"],
        "answer": "WAN",
        "category": "Data Communication and Networking"
    },
    {
        "question": "What is the maximum length of an IPv6 address?",
        "options": ["128 bits", "64 bits", "32 bits", "256 bits"],
        "answer": "128 bits",
        "category": "Data Communication and Networking"
    },


    // ..........................................................Sql 

    
    {
        "question": "Which SQL statement is used to extract data from a database?",
        "options": ["SELECT", "EXTRACT", "GET", "OPEN"],
        "answer": "SELECT",
        "category": "SQL"
    },
    {
        "question": "Which clause is used to filter records in SQL?",
        "options": ["WHERE", "FILTER", "HAVING", "ORDER BY"],
        "answer": "WHERE",
        "category": "SQL"
    },
    {
        "question": "How do you select all columns from a table named 'Employees'?",
        "options": ["SELECT * FROM Employees;", "SELECT ALL FROM Employees;", "GET * FROM Employees;", "EXTRACT ALL FROM Employees;"],
        "answer": "SELECT * FROM Employees;",
        "category": "SQL"
    },
    {
        "question": "Which SQL keyword is used to sort the result-set?",
        "options": ["ORDER BY", "SORT", "GROUP BY", "FILTER BY"],
        "answer": "ORDER BY",
        "category": "SQL"
    },
    {
        "question": "What does the SQL JOIN clause do?",
        "options": [
            "Combines rows from two or more tables",
            "Deletes duplicate rows",
            "Filters rows based on conditions",
            "Groups rows with the same values"
        ],
        "answer": "Combines rows from two or more tables",
        "category": "SQL"
    },
    {
        "question": "Which of the following is a type of JOIN in SQL?",
        "options": ["INNER JOIN", "SIDE JOIN", "UPPER JOIN", "LOWER JOIN"],
        "answer": "INNER JOIN",
        "category": "SQL"
    },
    {
        "question": "Which SQL function returns the number of rows in a query?",
        "options": ["COUNT()", "SUM()", "MAX()", "MIN()"],
        "answer": "COUNT()",
        "category": "SQL"
    },
    {
        "question": "What does the SQL keyword DISTINCT do?",
        "options": ["Returns only unique values", "Counts all rows", "Deletes duplicate rows", "Sorts the data"],
        "answer": "Returns only unique values",
        "category": "SQL"
    },
    {
        "question": "Which statement is used to delete data from a table?",
        "options": ["DELETE", "REMOVE", "DROP", "ERASE"],
        "answer": "DELETE",
        "category": "SQL"
    },
    {
        "question": "What is the difference between DELETE and TRUNCATE?",
        "options": [
            "DELETE removes rows and can be rolled back; TRUNCATE removes all rows quickly and cannot be rolled back",
            "DELETE is faster than TRUNCATE",
            "TRUNCATE deletes specific rows",
            "They are the same"
        ],
        "answer": "DELETE removes rows and can be rolled back; TRUNCATE removes all rows quickly and cannot be rolled back",
        "category": "SQL"
    },
    {
        "question": "Which SQL statement is used to create a new table?",
        "options": ["CREATE TABLE", "NEW TABLE", "MAKE TABLE", "ADD TABLE"],
        "answer": "CREATE TABLE",
        "category": "SQL"
    },
    {
        "question": "Which SQL clause groups rows sharing a property?",
        "options": ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
        "answer": "GROUP BY",
        "category": "SQL"
    },
    {
        "question": "Which clause is used to filter groups in SQL?",
        "options": ["HAVING", "WHERE", "GROUP BY", "FILTER"],
        "answer": "HAVING",
        "category": "SQL"
    },
    {
        "question": "How do you add a new column to an existing table?",
        "options": ["ALTER TABLE table_name ADD column_name datatype;", "ADD COLUMN table_name column_name datatype;", "MODIFY TABLE ADD COLUMN;", "UPDATE TABLE ADD COLUMN;"],
        "answer": "ALTER TABLE table_name ADD column_name datatype;",
        "category": "SQL"
    },
    {
        "question": "What is the primary key in a database?",
        "options": ["A unique identifier for each record", "A foreign key", "An index", "A default value"],
        "answer": "A unique identifier for each record",
        "category": "SQL"
    },
    {
        "question": "Which SQL statement is used to update existing records?",
        "options": ["UPDATE", "MODIFY", "CHANGE", "SET"],
        "answer": "UPDATE",
        "category": "SQL"
    },
    {
        "question": "Which SQL function is used to find the highest value in a column?",
        "options": ["MAX()", "MIN()", "TOP()", "GREATEST()"],
        "answer": "MAX()",
        "category": "SQL"
    },
    {
        "question": "Which SQL command is used to remove a table and its data?",
        "options": ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "ERASE TABLE"],
        "answer": "DROP TABLE",
        "category": "SQL"
    },
    {
        "question": "What is a foreign key?",
        "options": [
            "A field in one table that refers to the primary key in another table",
            "A unique identifier for each record",
            "A key used to encrypt data",
            "An index on a column"
        ],
        "answer": "A field in one table that refers to the primary key in another table",
        "category": "SQL"
    },
    {
        "question": "What does the SQL LIKE operator do?",
        "options": ["Searches for a specified pattern in a column", "Compares two columns", "Filters null values", "Sorts records"],
        "answer": "Searches for a specified pattern in a column",
        "category": "SQL"
    },
    {
        "question": "Which SQL keyword is used to combine the results of two queries?",
        "options": ["UNION", "JOIN", "COMBINE", "MERGE"],
        "answer": "UNION",
        "category": "SQL"
    },
    {
        "question": "Which command is used to rename a table?",
        "options": ["ALTER TABLE old_name RENAME TO new_name;", "RENAME TABLE old_name TO new_name;", "MODIFY TABLE old_name TO new_name;", "CHANGE TABLE old_name TO new_name;"],
        "answer": "ALTER TABLE old_name RENAME TO new_name;",
        "category": "SQL"
    },
    {
        "question": "Which data type is used to store large text in SQL?",
        "options": ["TEXT", "VARCHAR", "CHAR", "BLOB"],
        "answer": "TEXT",
        "category": "SQL"
    },
    {
        "question": "What is normalization in databases?",
        "options": [
            "Process of organizing data to reduce redundancy",
            "Backing up the database",
            "Writing SQL queries",
            "Creating indexes"
        ],
        "answer": "Process of organizing data to reduce redundancy",
        "category": "SQL"
    },
    {
        "question": "What is a view in SQL?",
        "options": [
            "A virtual table based on the result of a query",
            "A physical table",
            "A stored procedure",
            "A backup file"
        ],
        "answer": "A virtual table based on the result of a query",
        "category": "SQL"
    },

    // ................................................Node.js


    
    {
        "question": "What is Node.js primarily used for?",
        "options": [
            "Server-side scripting",
            "Client-side scripting",
            "Database management",
            "Styling web pages"
        ],
        "answer": "Server-side scripting",
        "category": "Node.js"
    },
    {
        "question": "Which of the following is a built-in module in Node.js?",
        "options": ["http", "express", "react", "angular"],
        "answer": "http",
        "category": "Node.js"
    },
    {
        "question": "Which command is used to initialize a Node.js project?",
        "options": ["npm init", "node init", "npm start", "node project"],
        "answer": "npm init",
        "category": "Node.js"
    },
    {
        "question": "What is the default file name for the entry point of a Node.js application?",
        "options": ["index.js", "app.js", "server.js", "main.js"],
        "answer": "index.js",
        "category": "Node.js"
    },
    {
        "question": "Which of the following is used to handle asynchronous operations in Node.js?",
        "options": ["Callbacks", "Promises", "Async/Await", "All of the above"],
        "answer": "All of the above",
        "category": "Node.js"
    },
    {
        "question": "What does the 'require' function do in Node.js?",
        "options": [
            "Imports modules",
            "Exports modules",
            "Creates a server",
            "Handles HTTP requests"
        ],
        "answer": "Imports modules",
        "category": "Node.js"
    },
    {
        "question": "Which of the following is true about Node.js?",
        "options": [
            "It is single-threaded and event-driven",
            "It uses multiple threads",
            "It is synchronous",
            "It only runs in browsers"
        ],
        "answer": "It is single-threaded and event-driven",
        "category": "Node.js"
    },
    {
        "question": "What module is used to create a web server in Node.js?",
        "options": ["http", "url", "fs", "net"],
        "answer": "http",
        "category": "Node.js"
    },
    {
        "question": "How do you install a package using npm?",
        "options": ["npm install package_name", "npm get package_name", "node install package_name", "npm add package_name"],
        "answer": "npm install package_name",
        "category": "Node.js"
    },
    {
        "question": "What is the purpose of 'package.json' in a Node.js project?",
        "options": [
            "To manage project dependencies and metadata",
            "To store source code",
            "To configure the server",
            "To log errors"
        ],
        "answer": "To manage project dependencies and metadata",
        "category": "Node.js"
    },
    {
        "question": "Which of the following can be used to read files asynchronously in Node.js?",
        "options": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.writeFile()"],
        "answer": "fs.readFile()",
        "category": "Node.js"
    },
    {
        "question": "What event is emitted when a stream finishes reading data?",
        "options": ["'end'", "'finish'", "'close'", "'data'"],
        "answer": "'end'",
        "category": "Node.js"
    },
    {
        "question": "Which Node.js module provides utilities for working with file and directory paths?",
        "options": ["path", "fs", "http", "url"],
        "answer": "path",
        "category": "Node.js"
    },
    {
        "question": "What does the 'process' object provide in Node.js?",
        "options": [
            "Information and control over the current Node.js process",
            "Functions to handle HTTP requests",
            "Utilities to work with files",
            "Database connectivity"
        ],
        "answer": "Information and control over the current Node.js process",
        "category": "Node.js"
    },
    {
        "question": "How can you handle errors in asynchronous Node.js functions?",
        "options": ["Using callbacks with error as first argument", "Try-catch blocks", "Promises catch", "All of the above"],
        "answer": "All of the above",
        "category": "Node.js"
    },
    {
        "question": "Which command runs a Node.js application?",
        "options": ["node filename.js", "npm start", "node start", "npm run"],
        "answer": "node filename.js",
        "category": "Node.js"
    },
    {
        "question": "What is the use of the 'buffer' class in Node.js?",
        "options": [
            "To handle binary data",
            "To handle JSON data",
            "To create web servers",
            "To manipulate strings"
        ],
        "answer": "To handle binary data",
        "category": "Node.js"
    },
    {
        "question": "Which protocol does Node.js's HTTP module support?",
        "options": ["HTTP/1.1", "FTP", "SMTP", "TCP"],
        "answer": "HTTP/1.1",
        "category": "Node.js"
    },
    {
        "question": "How do you export a module in Node.js?",
        "options": ["module.exports = myModule;", "export myModule;", "export default myModule;", "exports.myModule = myModule;"],
        "answer": "module.exports = myModule;",
        "category": "Node.js"
    },
    {
        "question": "Which built-in Node.js module is used for event-driven programming?",
        "options": ["events", "stream", "fs", "http"],
        "answer": "events",
        "category": "Node.js"
    },
    {
        "question": "What does the 'npm' stand for?",
        "options": ["Node Package Manager", "Node Performance Monitor", "Network Package Manager", "Node Process Manager"],
        "answer": "Node Package Manager",
        "category": "Node.js"
    },
    {
        "question": "Which method is used to create a new Buffer of a certain size?",
        "options": ["Buffer.alloc(size)", "Buffer.new(size)", "new Buffer(size)", "Buffer.create(size)"],
        "answer": "Buffer.alloc(size)",
        "category": "Node.js"
    },
    {
        "question": "Which function is used to schedule a callback after a delay in Node.js?",
        "options": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
        "answer": "setTimeout()",
        "category": "Node.js"
    },
    {
        "question": "What is the default scope of variables declared without var, let, or const in Node.js?",
        "options": [
            "Global scope",
            "Local function scope",
            "Block scope",
            "Module scope"
        ],
        "answer": "Global scope",
        "category": "Node.js"
    },
    {
        "question": "Which command updates all packages listed to their latest version in npm?",
        "options": ["npm update", "npm upgrade", "npm refresh", "npm install --latest"],
        "answer": "npm update",
        "category": "Node.js"
    }







    












]