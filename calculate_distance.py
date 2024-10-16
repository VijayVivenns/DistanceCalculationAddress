		import math

def haversine(lat1, lon1, lat2, lon2):
    # Radius of the Earth in km
    R = 6371.0

    # Convert latitude and longitude from degrees to radians
    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)

    # Haversine formula
    dlat = lat2_rad - lat1_rad
    dlon = lon2_rad - lon1_rad
    a = math.sin(dlat / 2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon / 2)**2
    c = 2 * math.asin(math.sqrt(a))

    # Distance in kilometers
    distance = R * c
    return distance

# Example coordinates
lat1, lon1 = 17.4484, 78.3830  # Point 1 (Warsaw)
lat2, lon2 = 17.4425, 78.3816  # Point 2 (Rome)

distance = haversine(lat1, lon1, lat2, lon2)
print(f"Distance: {distance:.2f} km")
