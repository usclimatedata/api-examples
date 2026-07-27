# Python examples

```bash
cd python
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

export USCLIMATEDATA_API_KEY=your-key-here
python3 stations.py
python3 climate_monthly.py
python3 station_capabilities.py
python3 normals_monthly.py
python3 normals_monthly_extended.py   # requires Advanced Access
python3 normals_daily.py              # requires Developer tier
python3 normals_daily_extended.py     # requires Advanced Access
```
