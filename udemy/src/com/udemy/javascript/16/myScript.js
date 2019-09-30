
var computeInterviewQuestion = function(person){
                                    if(person === 'teacher'){
                                        return function(name){
                                            console.log('What subject do you teach ' + name + '?');
                                        }
                                    }else if(person === 'designer'){
                                        return function(name){
                                            console.log('How do design softwares ' + name + '?');
                                        }
                                    }else{
                                        return function(){
                                            console.log('What do you do?');
                                        };
                                    }
                               };

var teacherInterview = computeInterviewQuestion('teacher');
teacherInterview('Mrs. Sarvamangala');

computeInterviewQuestion('designer')('Mr. Vijeth');