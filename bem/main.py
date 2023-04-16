from solar_client import SolarClient

# client = SolarClient("127.0.0.1:6002/api")
client = SolarClient("https://tapi.solar.org/api")

blocks = client.blocks.all()

print(blocks)
