function* gen()
{
    yield 135;
    yield;
    yield 124;
}

//calling the Function Generator

var mygen=gen()
{
    console.log(mygen.next().value);
    console.log(mygen.next().value);
    console.log(mygen.next().value);
}