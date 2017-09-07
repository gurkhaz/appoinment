#!C:\Perl\bin\perl.exe


 	use CGI; 
 	use strict;
  	use warnings;
  	use DBI;
  	use JSON;
	
	print "Content-type: text/plain\n\n";
	use CGI::Carp qw(warningsToBrowser fatalsToBrowser); 
	my $cgi = CGI->new;
	
	my $search_item = $cgi->param("search_item");
	
   


   # Connect to the database.
   my $dbh = DBI->connect("DBI:mysql:database=appoinment;host=localhost",
                         "root", "",
                         {'RaiseError' => 1});

 
   # now retrieve data from the table.
   my $sth = $dbh->prepare("SELECT * FROM my_appoinment WHERE description LIKE '%$search_item%';");
   $sth->execute();
  
 
   my @output;
  
   while (my $ref = $sth->fetchrow_hashref()) {
   
   	push @output, $ref;
   }
  
   print objToJson( { @output } );
  
   $sth->finish();


  
  # Disconnect from the database.
  $dbh->disconnect();