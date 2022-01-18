package templates 

import (
	"github.com/evcc-io/config/registry"
)

func init() {
	template := registry.Template{
		Class:  "meter",
		Type:   "custom",
		Name:   "Huawei SUN2000 with Sdongle and power sensor (Grid Meter)",
		Sample: `power:
  source: modbus
  uri: 192.0.2.2:502
  model: huawei
  timeout: 30s
  connectdelay: 5
  delay: 2s
  register:
    address: 37113 # Grid import export power
    type: holding
    decode: int32
  scale: -1
energy:
  source: modbus
  uri: 192.0.2.2:502
  model: huawei
  timeout: 30s
  connectdelay: 5
  delay: 2s
  register:
    address: 37121 # Grid active energy
    type: holding
    decode: int32
  scale: 0.01
currents:
- source: modbus
  uri: 192.0.2.2:502
  model: huawei
  register:
    address: 37107 # Huawei phase A grid current
    type: holding
    decode: int32
  scale: -0.01
- source: modbus
  uri: 192.0.2.2:502
  model: huawei
  register:
    address: 37109 # Huawei phase B grid current
    type: holding
    decode: int32
  scale: -0.01
- source: modbus
  uri: 192.0.2.2:502
  model: huawei
  register:
    address: 37111 # Huawei phase C grid current
    type: holding
    decode: int32
  scale: -0.01`,
	}

	registry.Add(template)
}
