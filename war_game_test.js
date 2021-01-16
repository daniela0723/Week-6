var expect = chai.expect;

describe('Card', function () {
    describe('constructor', function () {
        it('should create a new card with a name, rank, and value', function () {
            let x = new Card('Heart', 2, 2);
            expect(x.rank).to.equal(2);
        });
    });

    describe('Player', function () {
        describe('constructor', function () {
            it('should create a person with a name that is a string', function () {
                let p = new Player('Mario');
                expect(game.players[0].playerName).to.be.a('string');
            });
        });
    });

    describe('WARGame', function () {
        describe('start', function () {
            it('should create two players', function () {
                let game = new WARGame;
                game.start('Mario', 'Luigi');
                expect(game.players).to.have.length(2);
            });
            it('should throw an error if player name is not a string', function () {
                expect(function () {
                    let game2 = new WARGame;
                    game2.start(Toad, Yoshi); //will accept numbers as a name
                }).to.throw(Error);
            });
            it('should create a player deck with 26 cards', function () {
                let game1 = new WARGame;
                game1.start('Player 1', 'Player 2');
                expect(game1.players[0].playerCards).to.have.length(26);
            });
        });
    });

});

