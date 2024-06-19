export const entityQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What name of field?',
    required: true,
  },
  {
    type: 'autocomplete',
    name: 'type',
    message: 'What type of field?',
    suggest(s: string, choices: any[]) {
      return choices.filter((choice: { message: string }) => {
        return choice.message.toLowerCase().startsWith(s.toLowerCase())
      })
    },
    choices: [
    "byte",           // Tipo primitivo byte
    "short",          // Tipo primitivo short
    "int",            // Tipo primitivo int
    "long",           // Tipo primitivo long
    "float",          // Tipo primitivo float
    "double",         // Tipo primitivo double
    "boolean",        // Tipo primitivo boolean
    "char",           // Tipo primitivo char
    "Byte",           // Objeto Wrapper para byte
    "Short",          // Objeto Wrapper para short
    "Integer",        // Objeto Wrapper para int
    "Long",           // Objeto Wrapper para long
    "Float",          // Objeto Wrapper para float
    "Double",         // Objeto Wrapper para double
    "Boolean",        // Objeto Wrapper para boolean
    "Character",      // Objeto Wrapper para char
    "String",         // Tipo String
    "Object",         // Tipo Object (pode armazenar qualquer tipo)
    "ArrayList",      // Tipo de coleção ArrayList
    "LinkedList",     // Tipo de coleção LinkedList
    "HashSet",        // Tipo de coleção HashSet
    "HashMap",        // Tipo de coleção HashMap
    "Hashtable",      // Tipo de coleção Hashtable
    "TreeSet",        // Tipo de coleção TreeSet
    "TreeMap",        // Tipo de coleção TreeMap
    "LinkedHashSet",  // Tipo de coleção LinkedHashSet
    "LinkedHashMap",  // Tipo de coleção LinkedHashMap
    "PriorityQueue",  // Tipo de coleção PriorityQueue
    "Stack",          // Tipo de coleção Stack
    "Vector",         // Tipo de coleção Vector
    "Deque",          // Tipo de coleção Deque
    "LocalDate",      // Tipo de data LocalDate
    "LocalTime",      // Tipo de data LocalTime
    "LocalDateTime",  // Tipo de data LocalDateTime
    "Instant",        // Tipo de data Instant
    "Duration",       // Tipo de duração Duration
    "Period",         // Tipo de período Period
    "File",           // Tipo de arquivo File
    "Path",           // Tipo de caminho Path
    "URL",            // Tipo de URL
    "URI"  
    ],
    required: true,
  }
]