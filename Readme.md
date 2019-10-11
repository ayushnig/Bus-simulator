Bus in Carpark Simulator

Setup

    * Node.js      
    * npm    

    To run tests of the app, you'll need:

    * mocha - npm install -g mocha (Terminal)

Instructions
    I have implemented two options to send commands to the bus.   
        - The first option is to type in commands in command prompt.   
                npm start
                    Sample Commands: 
                    > PLACE 1,1, NORTH
                    > RIGHT
                    > MOVE
                    > REPORT
                        The Bus is now at: (2,1), facing EAST        
            - The second option is to provide a file with commands. There is a sample.txt file in repo.

                npm run file
        
Testing Instructions 

    Run `npm test` to run all the tests. It will show the coverage as well.

        npm test 				
