# Table

data from backend:

## `columns`:

  the key `columns` represents the table-head content, and will affect the data of each row.
  
  required keys: `key`, `label`, `type`<br/>
  possible keys: `action`
  
  `key`: the name actual name in the db
  
  `label`: display name
  
  `type`: one of -> ['string', 'number', 'date', 'input', 'select', 'button', 'checkbox' ....]
  
  `options`: string[] & when type is `select`
  `default_option`: one of `action.options` & type is `select` & value of cell is not defined
  
  `action`: an object that describes the action of the column
  
  `action.type`: one of -> ['click', 'input'],<br/>
  it's important to notice that not all actions go with all types, for instance -> a field of type `input` cannot have `click` event.
  
  `action.url`: this will be the url to redirect to. && `action.type` = one of ['click']
  
  `action.get`: sends a get request && `action.type` = one of ['click', 'input']
  
  ### Actions Formatting
  `get`, `url` etc are all valid actions and will store a url (string),
  
  the url should be able to store dymamic data (aka "state")
  
  <ins>a few examples</ins>
  
  `~` a dynamic value from the content of the table<br/>
  `-` a custom variable from the response data<br/>
  `{{crr}}` - the data of the current cell<br/>
  `{{state}}` - the current state of filters, sorting, page & paginator
  
  "https://.../../{{~id}}" -> on the same row, search for column where `key=id` and send it's value
  
  "https://.../../{{crr}}" -> for instance, we have an action `input`, the `{{crr}}` is the new value of the input.
    
   "https://.../../{{-token}}" -> for example if we got this data `{...data, ...config, custom: { token=123 }}` - the `-` symbol will tell my awesome code to look for it in the `custom` object within the response

```js
{
  "columns": [
    {
      "label": "#",
      "key": "id",
      "type": "number"
    },
    {
      "key": "name",
      "label": "Name",
      "type": "input",
      "action": {
        "type": "link",
        "url": "/user/{{id}}"
      }
    },
    {
      "key": "creted_at",
      "label": "Created At",
      "type": "date"
    }
  ],
  "rows": [
    {
      "id": 1,
      "name": "Omer",
      "created_at": "12/12/12"
    }, 
    {
      "id": 2,
      "name": "Yuval",
      "created_at": "12/12/12"
    }, 
    {
      "id": 3,
      "name": "Guy",
      "created_at": "12/12/12"
    }
  ]
}
```


// todo ```js
"config":{
      "pagination": {
        "enabled": true,
        "pageSize": 10,
        "pageSizeOptions": [5, 10, 25, 100]
      },
      "sorting": {
        "enabled": true
      },
      "filtering": {
        "enabled": true
      },
      "rowSelection": {
        "enabled": true,
        "multiple": true,
        "selectAll": true,
      },
      "exporting": {
        "enabled": true,
        "fileName": "export",
        "action":{
          "type": "link",
          "url": "http://localhost:3000/export?state="
        }
      },
      "rowOptions":{
        "resize": true,
        "lineBreak" : true,
      }
    }
  }
  ```
