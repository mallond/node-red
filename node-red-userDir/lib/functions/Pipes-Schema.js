// name: Pipes Schema
{
  "properties": {
    "amount": {
    "type": "number"
    },  
    "tax": {
      "type": "number"
    },
    "surcharge": {
    "type": "number"
    },
    "shipping": {
    "type": "number"
    },
    "total": {
    "type": "number"
    },
    "steps": {
    "type": "array"
    }
  },
  "required":["amount","tax","surcharge","shipping","steps"]
}