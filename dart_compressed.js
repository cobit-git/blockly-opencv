// Do not edit this file; automatically generated by gulp.
'use strict';


Blockly.Dart=new Blockly.Generator("Dart");Blockly.Dart.addReservedWords("assert,break,case,catch,class,const,continue,default,do,else,enum,extends,false,final,finally,for,if,in,is,new,null,rethrow,return,super,switch,this,throw,true,try,var,void,while,with,print,identityHashCode,identical,BidirectionalIterator,Comparable,double,Function,int,Invocation,Iterable,Iterator,List,Map,Match,num,Pattern,RegExp,Set,StackTrace,String,StringSink,Type,bool,DateTime,Deprecated,Duration,Expando,Null,Object,RuneIterator,Runes,Stopwatch,StringBuffer,Symbol,Uri,Comparator,AbstractClassInstantiationError,ArgumentError,AssertionError,CastError,ConcurrentModificationError,CyclicInitializationError,Error,Exception,FallThroughError,FormatException,IntegerDivisionByZeroException,NoSuchMethodError,NullThrownError,OutOfMemoryError,RangeError,StackOverflowError,StateError,TypeError,UnimplementedError,UnsupportedError");
Blockly.Dart.ORDER_ATOMIC=0;Blockly.Dart.ORDER_UNARY_POSTFIX=1;Blockly.Dart.ORDER_UNARY_PREFIX=2;Blockly.Dart.ORDER_MULTIPLICATIVE=3;Blockly.Dart.ORDER_ADDITIVE=4;Blockly.Dart.ORDER_SHIFT=5;Blockly.Dart.ORDER_BITWISE_AND=6;Blockly.Dart.ORDER_BITWISE_XOR=7;Blockly.Dart.ORDER_BITWISE_OR=8;Blockly.Dart.ORDER_RELATIONAL=9;Blockly.Dart.ORDER_EQUALITY=10;Blockly.Dart.ORDER_LOGICAL_AND=11;Blockly.Dart.ORDER_LOGICAL_OR=12;Blockly.Dart.ORDER_IF_NULL=13;Blockly.Dart.ORDER_CONDITIONAL=14;
Blockly.Dart.ORDER_CASCADE=15;Blockly.Dart.ORDER_ASSIGNMENT=16;Blockly.Dart.ORDER_NONE=99;
Blockly.Dart.init=function(a){Blockly.Dart.definitions_=Object.create(null);Blockly.Dart.functionNames_=Object.create(null);Blockly.Dart.variableDB_?Blockly.Dart.variableDB_.reset():Blockly.Dart.variableDB_=new Blockly.Names(Blockly.Dart.RESERVED_WORDS_);Blockly.Dart.variableDB_.setVariableMap(a.getVariableMap());for(var e=[],b=Blockly.Variables.allDeveloperVariables(a),c=0;c<b.length;c++)e.push(Blockly.Dart.variableDB_.getName(b[c],Blockly.Names.DEVELOPER_VARIABLE_TYPE));a=Blockly.Variables.allUsedVarModels(a);
for(c=0;c<a.length;c++)e.push(Blockly.Dart.variableDB_.getName(a[c].getId(),Blockly.VARIABLE_CATEGORY_NAME));e.length&&(Blockly.Dart.definitions_.variables="var "+e.join(", ")+";")};
Blockly.Dart.finish=function(a){a&&(a=Blockly.Dart.prefixLines(a,Blockly.Dart.INDENT));a="main() {\n"+a+"}";var e=[],b=[],c;for(c in Blockly.Dart.definitions_){var d=Blockly.Dart.definitions_[c];d.match(/^import\s/)?e.push(d):b.push(d)}delete Blockly.Dart.definitions_;delete Blockly.Dart.functionNames_;Blockly.Dart.variableDB_.reset();return(e.join("\n")+"\n\n"+b.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Dart.scrubNakedValue=function(a){return a+";\n"};
Blockly.Dart.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return"'"+a+"'"};Blockly.Dart.multiline_quote_=function(a){a=a.replace(/'''/g,"\\'\\'\\'");return"'''"+a+"'''"};
Blockly.Dart.scrub_=function(a,e,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(d=Blockly.utils.string.wrap(d,Blockly.Dart.COMMENT_WRAP-3),c=a.getProcedureDef?c+Blockly.Dart.prefixLines(d+"\n","/// "):c+Blockly.Dart.prefixLines(d+"\n","// "));for(var f=0;f<a.inputList.length;f++)a.inputList[f].type==Blockly.INPUT_VALUE&&(d=a.inputList[f].connection.targetBlock())&&(d=Blockly.Dart.allNestedComments(d))&&(c+=Blockly.Dart.prefixLines(d,"// "))}a=
a.nextConnection&&a.nextConnection.targetBlock();b=b?"":Blockly.Dart.blockToCode(a);return c+e+b};
Blockly.Dart.getAdjusted=function(a,e,b,c,d){b=b||0;d=d||Blockly.Dart.ORDER_NONE;a.workspace.options.oneBasedIndex&&b--;var f=a.workspace.options.oneBasedIndex?"1":"0";a=b?Blockly.Dart.valueToCode(a,e,Blockly.Dart.ORDER_ADDITIVE)||f:c?Blockly.Dart.valueToCode(a,e,Blockly.Dart.ORDER_UNARY_PREFIX)||f:Blockly.Dart.valueToCode(a,e,d)||f;if(Blockly.isNumber(a))a=parseInt(a,10)+b,c&&(a=-a);else{if(0<b){a=a+" + "+b;var g=Blockly.Dart.ORDER_ADDITIVE}else 0>b&&(a=a+" - "+-b,g=Blockly.Dart.ORDER_ADDITIVE);
c&&(a=b?"-("+a+")":"-"+a,g=Blockly.Dart.ORDER_UNARY_PREFIX);g=Math.floor(g);d=Math.floor(d);g&&d>=g&&(a="("+a+")")}return a};
