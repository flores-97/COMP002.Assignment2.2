// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
let hashTag;
hashTag = "#";

for (hashTag; hashTag.length <= 4; hashTag += "#")
{
    console.log(hashTag);
}
for (; hashTag.length > 1;)
{
    hashTag = hashTag.slice(0, -1);
    console.log(hashTag);
}
