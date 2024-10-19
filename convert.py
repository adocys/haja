import pypyodbc
import csv

# MS ACCESS DB CONNECTION
pypyodbc.lowercase = False
conn = pypyodbc.connect(
    r"Driver={Microsoft Access Driver (*.mdb, *.accdb)};" +
    r"Dbq=C:\temp\Temp_DB.accdb;")

# OPEN CURSOR AND EXECUTE SQL
cur = conn.cursor()
cur.execute("SELECT Column1, Column2, FROM Table1");

# OPEN CSV AND ITERATE THROUGH RESULTS
with open('Output.csv', 'w', newline='') as f:
    writer = csv.writer(f)    
    for row in cur.fetchall() :
        writer.writerow(row)

cur.close()
conn.close()
