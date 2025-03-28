User:
Name,
Email,
Phone-no,
Occupation,
User-Details(coming with family and everything),
Location / Desigred Location,



House Owner:
deal type: (Apartment, flat, house, room, pg, ...)
location,
photos - section= {rooms[], property, surrounding, },
contact,
price,
facilities (wifi, water, ...),




APIs:
Buyer:
- Load all propreties:[
property: image [Profile], price, buyerType
]
INPUT- userLocation/Desigred Location

- Details(INPUT - propertyId)

*ngIf(subscription) owner contact no

- property request


Owner:
- Load incoming requests! [users]
- load buyer details 
- insert property details
- modify details 


API's Formal:
```
*Owner*
- get AllMyproperties {ownerId}
- get/post/put/delete propertyDetails {ownerId, propertyDetails}
- get allPropertyRequests {ownerId}
- put propertyRequest {Accept/Reject, message}

*Buyer*
- get allProperties {location}
- get propertyDetails {propertyId, geoLocation}
- post/patch propertyRequest {propertyId, userId}
- get allPropertyRequests {uId}

```



Questions:
This platform will be Subscription type or the comission type