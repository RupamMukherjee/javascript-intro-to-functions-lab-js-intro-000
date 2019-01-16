function shout(str)
{
  return str.toUpperCase()
}
function whisper(str)
{
  return str.toLowerCase()
}
function logShout(str)
{
  console.log(str.toUpperCase())
}
function logWhisper(str)
{
  console.log(str.toLowerCase())
}
function sayHiToGrandma(str)
{
  if (isUpperCase(str))
    return "I cant hear you!"
  else if (isLowerCase(str))
    return "YES INDEED!"
  else if (str === 'I love you, Grandma.')
    return "I love you too"
}
