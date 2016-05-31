describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {

        it('should should...', function () {



            /* Created by Piotr P */

            it('should return correct value and success message', function () {
                expect(answer.calculateArea(10, 4, 1, 'Success', 'Error')).toEqual({area: 6, message: 'Success'});
                expect(answer.calculateArea(20, 3, 1, 'Success', 'Error')).toEqual({area: 17, message: 'Success'});
                expect(answer.calculateArea(4, 3, 0, 'Success', 'Error')).toEqual({area: 0, message: 'Success'});
            });

            });

            it('should return 0 and null message', function () {
            expect(answer.calculateArea(4, 4, 1, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
            });

            it('should return value and error message', function () {
            /* 4-3  * 3  --> should be value 3 */
                expect(answer.calculateArea(3, 4, 3, 'Success', 'Error')).toEqual({area: -5, message: 'Error'});

            it('should return correct false', function () {

                expect(answer.calculateArea('asadas', 'asdas', 'asadasd', 'xdfgfdgs', 'xsadad')).toEqual(false);
                expect(answer.calculateArea(10, 'xasdsad', 'xcasc', 'x', 'x')).toEqual(false);
                expect(answer.calculateArea(10, 4, 'xsadasd', 'bsadsad', 'bsdsadsad')).toEqual(false);
                expect(answer.calculateArea(10, 'sadsadasds', 1, 'sdsadsadsd', 'bsdsadsadsdsad')).toEqual(false);

                expect(answer.calculateArea(10, 4, 1, 1, 'b')).toEqual(false);
                expect(answer.calculateArea(10, 4, 1, 'c', 1)).toEqual(false);


        });
    });
    });
});

