import math

def haversine(17.4484, 78.3830, 17.4425, 78.3816):
    R = 6371.0  # Earth radius in kilometers
    17.4484_rad = math.radians(17.4484)
    78.3830_rad = math.radians(78.3830)
    17.4425_rad = math.radians(17.4425)
    78.3816_rad = math.radians(78.3816)

    delta_lat = 17.4425_rad - 17.4484_rad
    delta_lon = 78.3816_rad - 78.3830_rad

    a = math.sin(delta_lat / 2) ** 2 + math.cos(17.4484_rad) * math.cos(17.4425_rad) * math.sin(delta_lon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    distance = R * c
    return distance

distance = haversine(17.4484, 78.3830, 17.4425, 78.3816)
print(f"Distance: {distance:.2f} km")
