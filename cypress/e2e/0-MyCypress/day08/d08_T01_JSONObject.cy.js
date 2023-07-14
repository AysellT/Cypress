describe('JSON Object', () => {
    
    it('Json Key Value', () => {

        cy.visit('https://www.google.com/')

        const simpleObject = {"key1":"value1","key2":"value2","key3":"value3"}
        console.log(simpleObject.key2)
        console.log(simpleObject["key3"])

        const ArrayDegerler = ["elif","ayse","ahmet"]
        console.log(ArrayDegerler[2])

        const ArrayDegerler2 = [{"e1":"enes","e2":"mehmet","e3":"arda"},{"k1":"azra","k2":"ayse","k3":"emine"}]
        console.log(ArrayDegerler2[0].e3)

        const body = {
            "student":[{
                "name":"ali",
                "lastname":"kaya"
            }]
        }
        console.log(body.student[0].lastname)
    });

});